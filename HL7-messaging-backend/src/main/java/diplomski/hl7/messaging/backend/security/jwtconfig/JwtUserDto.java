package diplomski.hl7.messaging.backend.security.jwtconfig;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class JwtUserDto {

    private String userId;
    private String role;
}
