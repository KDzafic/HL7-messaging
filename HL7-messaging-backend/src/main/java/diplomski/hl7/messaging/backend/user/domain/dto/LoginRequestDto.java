package diplomski.hl7.messaging.backend.user.domain.dto;

import lombok.Data;

import jakarta.validation.constraints.NotBlank;

@Data
public class LoginRequestDto {
	@NotBlank
	private String email;

	@NotBlank
	private String password;
}
