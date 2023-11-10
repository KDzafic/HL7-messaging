package diplomski.hl7.messaging.backend.user.repository;

import diplomski.hl7.messaging.backend.message.domain.Message;
import diplomski.hl7.messaging.backend.user.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, String>, JpaSpecificationExecutor<User> {

    Optional<User> findByEmail(String email);

    Boolean existsByEmail(String email);

    @Query("SELECT m FROM Message m JOIN User u ON m.receiver.id = u.id where m.receiver.id =:userId and m.receiver.lastActivity < m.dateSent")
    List<Message> getNotifications(String userId);

}
