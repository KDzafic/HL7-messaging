package diplomski.hl7.messaging.backend.medical_facility.repository;

import diplomski.hl7.messaging.backend.medical_facility.domain.MedicalFacility;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MedicalFacilityRepository extends JpaRepository<MedicalFacility, String> {
}
