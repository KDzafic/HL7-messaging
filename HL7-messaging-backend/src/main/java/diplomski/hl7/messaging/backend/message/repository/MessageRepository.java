package diplomski.hl7.messaging.backend.message.repository;

import diplomski.hl7.messaging.backend.message.domain.Message;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface MessageRepository extends JpaRepository<Message, String>, JpaSpecificationExecutor<Message> {
}
