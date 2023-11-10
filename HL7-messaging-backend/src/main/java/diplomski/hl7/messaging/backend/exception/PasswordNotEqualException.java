package diplomski.hl7.messaging.backend.exception;

public class PasswordNotEqualException extends RuntimeException {
    public PasswordNotEqualException() {
        super("Emails are not equal!");
    }
}
