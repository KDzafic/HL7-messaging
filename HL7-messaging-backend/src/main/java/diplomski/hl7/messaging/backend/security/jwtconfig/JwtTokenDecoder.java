package diplomski.hl7.messaging.backend.security.jwtconfig;

import java.util.Base64;

public final class JwtTokenDecoder {

    private JwtTokenDecoder() {
    }

    public static String decode(String jwtToken) {
        String[] splitString = jwtToken.split("\\.");
        String base64EncodedBody = splitString[1];
        byte[] bytes = Base64.getDecoder().decode(base64EncodedBody);
        return new String(bytes);
    }
}