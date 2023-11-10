package diplomski.hl7.messaging.backend.medical_facility.controller;


import diplomski.hl7.messaging.backend.medical_facility.domain.dto.CreateFacilityDto;
import diplomski.hl7.messaging.backend.medical_facility.service.MedicalFacilityService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/medical-facility")
public class MedicalFacilityController {

    private final MedicalFacilityService medicalFacilityService;

    @PostMapping(value = "/create", consumes = "application/json", produces = "application/json")
    public ResponseEntity<Void> create(@RequestBody CreateFacilityDto createFacilityDto) {
        medicalFacilityService.create(createFacilityDto);
        return ResponseEntity.ok().build();
    }
}
