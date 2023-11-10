package diplomski.hl7.messaging.backend.exception;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class ExceptionResponse {
    LocalDateTime timestamp;
    String message;
    String detail;
    public ExceptionResponse(LocalDateTime timestamp, String message, String detail) {
        this.timestamp = timestamp;
        this.message = message;
        this.detail = detail;
    }

}
