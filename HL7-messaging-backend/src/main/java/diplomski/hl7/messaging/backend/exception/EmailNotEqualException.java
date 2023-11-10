package diplomski.hl7.messaging.backend.exception;

public class EmailNotEqualException extends RuntimeException {
    public EmailNotEqualException() {
        super("Emails are not equal!");
    }
}
