package diplomski.hl7.messaging.backend.message.domain;

import diplomski.hl7.messaging.backend.user.domain.User;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.GenericGenerator;


import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
@Getter
@Setter
@Entity
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Table(name = "message")
public class Message {

    @Id
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid")
    private String id;

    @Column(name = "message")
    private String message;

    @Column(name = "date_sent")
    private LocalDateTime dateSent;

    @ManyToOne
    @JoinColumn(name = "sender_id")
    private User sender;

    @ManyToOne
    @JoinColumn(name = "receiver_id")
    private User receiver;

    @Column(name = "type")
    private String type;

    @Column(name = "encrypted_msg")
    private String encryptedMessage;

    @Column(name = "status")
    private String status;
}
