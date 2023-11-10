package diplomski.hl7.messaging.backend.medical_facility.domain.dto;

import lombok.*;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CreateFacilityDto {

    private String name;
    private String type;
    private String phone;
    private String address;
}
