package diplomski.hl7.messaging.backend.user.service;

import diplomski.hl7.messaging.backend.exception.EmailNotEqualException;
import diplomski.hl7.messaging.backend.exception.PasswordNotEqualException;
import diplomski.hl7.messaging.backend.medical_facility.domain.MedicalFacility;
import diplomski.hl7.messaging.backend.medical_facility.repository.MedicalFacilityRepository;
import diplomski.hl7.messaging.backend.message.domain.Message;
import diplomski.hl7.messaging.backend.specifications.SearchSpecifications;
import diplomski.hl7.messaging.backend.user.domain.User;
import diplomski.hl7.messaging.backend.user.domain.dto.ChangeUserInfoDto;
import diplomski.hl7.messaging.backend.user.domain.dto.SignupRequestDto;
import diplomski.hl7.messaging.backend.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;


@Slf4j
@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final MedicalFacilityRepository medicalFacilityRepository;
    private final PasswordEncoder encoder;


    public void createUser(SignupRequestDto signUpRequestDto) {
        User user = new User();
        user.setFirstName(signUpRequestDto.getFirstname());
        user.setLastName(signUpRequestDto.getLastname());
        user.setEmail(signUpRequestDto.getEmail());
        user.setProfession(signUpRequestDto.getProfession());
        user.setPassword(encoder.encode(signUpRequestDto.getPassword()));
        user.setPhone(signUpRequestDto.getPhone());
        user.setAddress(signUpRequestDto.getAddress());
        user.setLastActivity(LocalDateTime.now());
        user.setStatus("NEW");
        user.setRole("USER");
        Optional<MedicalFacility> medicalFacility = medicalFacilityRepository.findById(signUpRequestDto.getMedicalFacilityId());
        user.setMedicalFacility(medicalFacility.get());
        userRepository.save(user);
    }

    public List<User> getUserByEmail(String email) {
        Specification<User> specification;
        specification = Specification.where(SearchSpecifications.searchByEmail(email));
        return userRepository.findAll(specification);
    }

    public void delete(String userId) {
        Optional<User> user = userRepository.findById(userId);
        user.get().setMedicalFacility(null);
        userRepository.delete(user.get());
    }

    public User getUser(String userId) {
        return userRepository.findById(userId).get();
    }

    public User updateUser(ChangeUserInfoDto changeUserInfoDto, String userId) {
        User user = getUser(userId);
        System.out.println(changeUserInfoDto.getConfirmEmail());
        System.out.println(changeUserInfoDto.getEmail());

        if (!changeUserInfoDto.getConfirmEmail().equals(changeUserInfoDto.getEmail())) {
            throw new EmailNotEqualException();
        }
        if (!changeUserInfoDto.getConfirmPassword().equals(changeUserInfoDto.getPassword())) {
            throw new PasswordNotEqualException();
        }
        user.setPassword(encoder.encode(changeUserInfoDto.getPassword()));
        user.setEmail(changeUserInfoDto.getEmail());
        user.setAddress(changeUserInfoDto.getAddress());
        user.setPhone(changeUserInfoDto.getPhone());
        user.setLastName(changeUserInfoDto.getLastName());
        user.setFirstName(changeUserInfoDto.getFirstName());
        return userRepository.save(user);
    }

    public List<Message> getUserNotifications(String userId) {
        List<Message> messages = userRepository.getNotifications(userId);
        return messages;
    }
}
