package diplomski.hl7.messaging.backend.security.jwtconfig;

import lombok.Data;

@Data
public class JwtToken {

    private String userId;
    private String role;
}
