package diplomski.hl7.messaging.backend.user.domain;

import diplomski.hl7.messaging.backend.medical_facility.domain.MedicalFacility;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.GenericGenerator;

import java.time.LocalDateTime;

@Getter
@Setter
@Entity
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Table(name = "user")
public class User {

    @Id
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid")
    private String id;

    @Column(name = "firstname")
    private String firstName;

    @Column(name = "lastname")
    private String lastName;

    @Column(name = "email")
    private String email;

    @Column(name = "profession")
    private String profession;

    @Column(name = "password")
    private String password;

    @Column(name = "phone")
    private String phone;

    @Column(name = "address")
    private String address;

    @Column(name = "last_activity")
    private LocalDateTime lastActivity;

    @Column(name = "role")
    private String role;

    @Column(name = "picture_url")
    private String pictureUrl;

    @ManyToOne
    @JoinColumn(name = "medical_facility_id", referencedColumnName = "id")
    private MedicalFacility medicalFacility;

    @Column(name = "status")
    private String status;

}
