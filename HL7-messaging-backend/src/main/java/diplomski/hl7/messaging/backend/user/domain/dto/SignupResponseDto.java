package diplomski.hl7.messaging.backend.user.domain.dto;

import lombok.Data;

@Data
public class SignupResponseDto {

    private String message;

    public SignupResponseDto(String message) {
        this.message = message;
    }

}
