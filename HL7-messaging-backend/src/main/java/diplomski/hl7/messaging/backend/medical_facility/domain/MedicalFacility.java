package diplomski.hl7.messaging.backend.medical_facility.domain;


import com.fasterxml.jackson.annotation.JsonIgnore;
import diplomski.hl7.messaging.backend.user.domain.User;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.GenericGenerator;

import java.util.List;

@Getter
@Setter
@Entity
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Table(name = "medical_facility")
public class MedicalFacility {

    @Id
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid")
    private String id;

    @Column(name = "name")
    private String name;

    @Column(name = "type")
    private String type;

    @Column(name = "phone")
    private String phone;

    @Column(name = "address")
    private String address;

    @JsonIgnore
    @OneToMany(mappedBy = "medicalFacility", fetch = FetchType.LAZY)
    private List<User> staffList;

}
