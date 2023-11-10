package diplomski.hl7.messaging.backend.message.service;

import diplomski.hl7.messaging.backend.message.domain.Message;
import diplomski.hl7.messaging.backend.message.domain.dto.CreateMessageDto;
import diplomski.hl7.messaging.backend.message.domain.dto.Headers;
import diplomski.hl7.messaging.backend.message.repository.MessageRepository;
import diplomski.hl7.messaging.backend.specifications.SearchSpecifications;
import diplomski.hl7.messaging.backend.user.domain.User;
import diplomski.hl7.messaging.backend.user.repository.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;
import java.util.Map;

@Slf4j
@Service
@RequiredArgsConstructor
public class MessageService {
    private final UserRepository userRepository;
    private final MessageRepository messageRepository;

    public Message createMessage(CreateMessageDto createMessageDto, String userId) {
        Message message = new Message();
        message.setEncryptedMessage(createMessageDto.getMessage());
        extractHL7Info(createMessageDto.getMessage(), message);
        if (userRepository.findById(userId).get().getStatus().equals("SPAM")) {
            message.setStatus("SPAM");
        } else {
            message.setStatus("NEW");
        }
        messageRepository.save(message);
        return message;
    }

    public void extractHL7Info(String hl7Message, Message message) {
        String[] segments = hl7Message.split("\n");

        String senderEmail = "";
        String receiverEmail = "";
        String date = "";
        String messageType = "";
        Map<String, String> messages = new HashMap<>();

        for (String segment : segments) {
            if (segment.startsWith("MSH")) {
                String[] fields = segment.split("\\|");
                if (fields.length >= 7) {
                    senderEmail = fields[4];
                    receiverEmail = fields[6];
                    date = fields[7].split("\\|")[0];
                    messageType = fields[9].replace("^","_");
                }
            } else if (segment.startsWith("ADT")) {
                String[] fields = segment.split("\\|");
                if (fields.length >= 0) {
                    messageType = fields[0];
                }
            } else {
                String[] fields = segment.split("\\|");
                if (fields.length > 2) {
                    String segmentName = fields[0];
                    System.out.println(segmentName);
                    String msg = segment.substring(segment.indexOf("|") + 1).replace('|', ' ');
                    if(segmentName.equals("EVN")){
                        msg = extractAndFormatTimestamp(msg);
                    }
                    messages.put(segmentName, msg);
                }
            }
        }
        String msg = "";
        for (Map.Entry<String, String> entry : messages.entrySet()) {
            String key = entry.getKey();
            String value = entry.getValue();
            msg += getFullKey(key) + " - " + value + "\n";
        }
        message.setMessage(msg);
        message.setType(messageType);
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyyMMddHHmmss");
        LocalDateTime localDateTime = LocalDateTime.parse(date, formatter).withNano(0);
        message.setDateSent(localDateTime);
        message.setSender(userRepository.findByEmail(senderEmail).get());
        message.setReceiver(userRepository.findByEmail(receiverEmail).get());
    }


    public static String extractAndFormatTimestamp(String message) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyyMMddHHmmss");

        String trimmedMessage = message.trim();

        String timestampStr = trimmedMessage.substring(trimmedMessage.indexOf(" ")).trim(); // Remove leading spaces

        LocalDateTime timestamp = LocalDateTime.parse(timestampStr, formatter);

        DateTimeFormatter outputFormatter = DateTimeFormatter.ofPattern("mm:ss dd/MM/yyyy");
        String formattedTimestamp = timestamp.format(outputFormatter);

        String prefix = trimmedMessage.substring(0, trimmedMessage.indexOf(" ")); // Get the prefix

        String result = prefix + " " + formattedTimestamp;

        return result;
    }


        private String getFullKey(String key) {
        for (Headers header : Headers.values()) {
            if (header.getValue().equals(key) || header.name().equals(key)) {
                System.out.println("Match found: " + header);
                return header + " - " + header.getValue();
            }
        }
        return "Test";
    }

    public Message getMessage(String messageId) {
        return messageRepository.findById(messageId).orElseThrow(() -> {
            log.error("Message with id {} is not found.", messageId);
            return new EntityNotFoundException("Message with id " + messageId + " is not found.");
        });
    }

    public void delete(String messageId) {
        messageRepository.deleteById(messageId);
    }

    public Page<Message> getAllMessages(String userId, Pageable pageable) {
        Specification<Message> specification;
        specification = Specification.where(SearchSpecifications.getAllMessages(userId));
        return messageRepository.findAll(specification, pageable);
    }

    public Page<Message> getAllSentMessages(String userId, Pageable pageable) {
        Specification<Message> specification;
        specification = Specification.where(SearchSpecifications.getAllSentMessages(userId));
        return messageRepository.findAll(specification, pageable);
    }

    public Page<Message> getAllFavouriteMessages(String userId, Pageable pageable) {
        Specification<Message> specification;
        specification = Specification.where(SearchSpecifications.getAllFavouriteMessages(userId));
        return messageRepository.findAll(specification, pageable);
    }

    public Page<Message> getAllDeletedMessages(String userId, Pageable pageable) {
        Specification<Message> specification;
        specification = Specification.where(SearchSpecifications.getAllDeletedMessages(userId));
        return messageRepository.findAll(specification, pageable);
    }

    public Page<Message> getAllSpamMessages(String userId, Pageable pageable) {
        Specification<Message> specification;
        specification = Specification.where(SearchSpecifications.getAllSpamMessages(userId));
        return messageRepository.findAll(specification, pageable);
    }

    public Message spamMessage(String messageId, String userId) {
        Message message = getMessage(messageId);
        message.setStatus("SPAM");
        User user = userRepository.findById(userId).get();
        user.setStatus("SPAM");
        userRepository.save(user);
        return messageRepository.save(message);
    }

    public Message unspamMessage(String messageId, String userId) {
        Message message = getMessage(messageId);
        message.setStatus("NEW");
        User user = userRepository.findById(userId).get();
        user.setStatus(null);
        userRepository.save(user);
        return messageRepository.save(message);
    }

    public Message favouriteMessage(String messageId) {
        Message message = getMessage(messageId);
        message.setStatus("STAR");
        return messageRepository.save(message);
    }

    public Message unfavouriteMessage(String messageId) {
        Message message = getMessage(messageId);
        message.setStatus("NEW");
        return messageRepository.save(message);
    }


    public Message setDeleteMessage(String messageId) {
        Message message = getMessage(messageId);
        message.setStatus("DELETE");
        return messageRepository.save(message);
    }

    public Message unsetDeleteMessage(String messageId) {
        Message message = getMessage(messageId);
        message.setStatus("NEW");
        return messageRepository.save(message);
    }

    public Page<Message> fullSearch(String userId, String text, Pageable pageable) {
        Specification<Message> specification;
        specification = Specification
                .where(SearchSpecifications.searchByEmailMessage(text)
                        .or(SearchSpecifications.searchByMessage(text))
                        .or(SearchSpecifications.searchByType(text)));
        return messageRepository.findAll(specification, pageable);
    }
}
