package diplomski.hl7.messaging.backend.medical_facility.service;

import diplomski.hl7.messaging.backend.medical_facility.domain.MedicalFacility;
import diplomski.hl7.messaging.backend.medical_facility.domain.dto.CreateFacilityDto;
import diplomski.hl7.messaging.backend.medical_facility.repository.MedicalFacilityRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Slf4j
@Service
@RequiredArgsConstructor
public class MedicalFacilityService {

    private final MedicalFacilityRepository medicalFacilityRepository;

    public void create(CreateFacilityDto createFacilityDto) {
        MedicalFacility medicalFacility = new MedicalFacility();
        medicalFacility.setName(createFacilityDto.getName());
        medicalFacility.setType(createFacilityDto.getType());
        medicalFacility.setPhone(createFacilityDto.getPhone());
        medicalFacility.setAddress(createFacilityDto.getAddress());
        medicalFacility.setStaffList(new ArrayList<>());
        medicalFacilityRepository.save(medicalFacility);
    }
}
