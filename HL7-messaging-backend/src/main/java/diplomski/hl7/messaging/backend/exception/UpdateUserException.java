package diplomski.hl7.messaging.backend.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.time.LocalDateTime;

@RestControllerAdvice
public class UpdateUserException extends ResponseEntityExceptionHandler {
    @ExceptionHandler(EmailNotEqualException.class)
    public final ResponseEntity<ExceptionResponse> handleUpdateUserException (EmailNotEqualException emailNotEqualException, WebRequest request) {
        ExceptionResponse exceptionResponse = new ExceptionResponse(LocalDateTime.now(), emailNotEqualException.getMessage(),
                request.getDescription(false));
        return new ResponseEntity<>(exceptionResponse, HttpStatus.BAD_REQUEST);
    }
    @ExceptionHandler(PasswordNotEqualException.class)
    public final ResponseEntity<ExceptionResponse> handleUserNotFoundException(PasswordNotEqualException userNotFoundException, WebRequest request) {
        ExceptionResponse exceptionResponse = new ExceptionResponse(LocalDateTime.now(), userNotFoundException.getMessage(),
                request.getDescription(false));
        return new ResponseEntity<>(exceptionResponse, HttpStatus.NOT_FOUND);
    }
}
