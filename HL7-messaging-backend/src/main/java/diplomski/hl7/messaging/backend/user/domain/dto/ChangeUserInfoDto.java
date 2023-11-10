package diplomski.hl7.messaging.backend.user.domain.dto;

import lombok.Data;

@Data
public class ChangeUserInfoDto {
    private String email;
    private String confirmEmail;
    private String password;
    private String confirmPassword;
    private String phone;
    private String address;
    private String firstName;
    private String lastName;
}
