package diplomski.hl7.messaging.backend.message.controller;

import diplomski.hl7.messaging.backend.message.domain.Message;
import diplomski.hl7.messaging.backend.message.domain.dto.CreateMessageDto;
import diplomski.hl7.messaging.backend.message.service.MessageService;
import diplomski.hl7.messaging.backend.security.jwtconfig.JwtUserDto;
import diplomski.hl7.messaging.backend.util.PageableAsQueryParam;
import io.swagger.v3.oas.annotations.Parameter;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequiredArgsConstructor
@RequestMapping("/api/message")
public class MessageController {

    private final MessageService messageService;

    @PostMapping(value = "/create", consumes = "application/json", produces = "application/json")
    public void createMessage(@RequestBody CreateMessageDto createMessageDto, JwtUserDto jwtUserDto) {
        messageService.createMessage(createMessageDto, jwtUserDto.getUserId());
    }

    @PageableAsQueryParam
    @GetMapping("/filter/messages")
    public ResponseEntity<Page<Message>> getAllMessages(@Parameter(hidden = true)
                                                        @PageableDefault(sort = "dateSent", direction = Sort.Direction.DESC, size = 10) Pageable pageable,
                                                        JwtUserDto jwtUserDto) {
        return ResponseEntity.ok(messageService.getAllMessages(jwtUserDto.getUserId(), pageable));
    }

    @PageableAsQueryParam
    @GetMapping("/filter/sent-messages")
    public ResponseEntity<Page<Message>> getAllSentMessages(@Parameter(hidden = true)
                                                            @PageableDefault(sort = "dateSent", direction = Sort.Direction.DESC, size = 10) Pageable pageable,
                                                            JwtUserDto jwtUserDto) {
        return ResponseEntity.ok(messageService.getAllSentMessages(jwtUserDto.getUserId(), pageable));
    }

    @PageableAsQueryParam
    @GetMapping("/filter/full-search")
    public ResponseEntity<Page<Message>> fullSearch(@Parameter(hidden = true)
                                                    @PageableDefault(sort = "dateSent", direction = Sort.Direction.DESC, size = 10) Pageable pageable,
                                                    @RequestParam String text,
                                                    JwtUserDto jwtUserDto) {
        return ResponseEntity.ok(messageService.fullSearch(jwtUserDto.getUserId(), text, pageable));
    }

    @PageableAsQueryParam
    @GetMapping("/filter/favourite")
    public ResponseEntity<Page<Message>> getAllFavouriteMessages(@Parameter(hidden = true)
                                                                 @PageableDefault(sort = "dateSent", direction = Sort.Direction.DESC, size = 10) Pageable pageable,
                                                                 JwtUserDto jwtUserDto) {
        return ResponseEntity.ok(messageService.getAllFavouriteMessages(jwtUserDto.getUserId(), pageable));
    }

    @PageableAsQueryParam
    @GetMapping("/filter/delete")
    public ResponseEntity<Page<Message>> getAllDeletedMessages(@Parameter(hidden = true)
                                                               @PageableDefault(sort = "dateSent", direction = Sort.Direction.DESC, size = 10) Pageable pageable,
                                                               JwtUserDto jwtUserDto) {
        return ResponseEntity.ok(messageService.getAllDeletedMessages(jwtUserDto.getUserId(), pageable));
    }

    @PageableAsQueryParam
    @GetMapping("/filter/spam")
    public ResponseEntity<Page<Message>> getAllSpamMessages(@Parameter(hidden = true)
                                                            @PageableDefault(sort = "dateSent", direction = Sort.Direction.DESC, size = 10) Pageable pageable,
                                                            JwtUserDto jwtUserDto) {
        return ResponseEntity.ok(messageService.getAllSpamMessages(jwtUserDto.getUserId(), pageable));
    }


    @PutMapping("/favourite")
    @CrossOrigin(origins = "http://localhost:5173")
    public ResponseEntity<Message> favouriteMessage(@RequestParam String messageId) {
        return ResponseEntity.ok(messageService.favouriteMessage(messageId));
    }

    @PutMapping("/spam")
    @CrossOrigin(origins = "http://localhost:5173")
    public ResponseEntity<Message> spamMessage(@RequestParam String messageId, String userId) {
        return ResponseEntity.ok(messageService.spamMessage(messageId, userId));
    }

    @PutMapping("/unspam")
    @CrossOrigin(origins = "http://localhost:5173")
    public ResponseEntity<Message> unspamMessage(@RequestParam String messageId, String userId) {
        return ResponseEntity.ok(messageService.unspamMessage(messageId, userId));
    }

    @PutMapping("/unfavourite")
    @CrossOrigin(origins = "http://localhost:5173")
    public ResponseEntity<Message> unfavouriteMessage(@RequestParam String messageId) {
        return ResponseEntity.ok(messageService.unfavouriteMessage(messageId));
    }

    @PutMapping("/set-delete")
    @CrossOrigin(origins = "http://localhost:5173")
    public ResponseEntity<Message> setDeleteMessage(@RequestParam String messageId) {
        return ResponseEntity.ok(messageService.setDeleteMessage(messageId));
    }

    @PutMapping("/unset-delete")
    @CrossOrigin(origins = "http://localhost:5173")
    public ResponseEntity<Message> unsetDeleteMessage(@RequestParam String messageId) {
        return ResponseEntity.ok(messageService.unsetDeleteMessage(messageId));
    }

    @GetMapping()
    public ResponseEntity<Message> getMessageById(@RequestParam String messageId) {
        return ResponseEntity.ok(messageService.getMessage(messageId));
    }

    @DeleteMapping(value = "/delete")
    public void deleteMessage(@RequestParam String messageId) {
        messageService.delete(messageId);
    }
}
