package diplomski.hl7.messaging.backend.user.domain.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

import jakarta.persistence.Column;

@Data
public class SignupRequestDto {

    @NotBlank
    @Size(min = 3, max = 45)
    private String firstname;

    @NotBlank
    @Size(min = 3, max = 45)
    private String lastname;

    @Size(min = 6, max = 45)
    @Column(name = "phone")
    private String phone;

    @Size(min = 6, max = 45)
    @Column(name = "profession")
    private String profession;

    @Size(min = 3, max = 45)
    @Column(name = "address")
    private String address;

    @NotBlank
    @Size(max = 50)
    @Email
    private String email;

    @NotBlank
    @Size(min = 6, max = 40)
    private String password;

    @NotBlank
    private String medicalFacilityId;
}
