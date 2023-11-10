package diplomski.hl7.messaging.backend.message.domain.dto;

public enum Headers {
    NK1("Next Of Kin"),
    EVN("Event Type"),
    ACC("Accident"),
    BLG("Billing"),
    DG1("Diagnosis"),
    DSP("Display Data"),
    ERR("Error"),
    IN1("Insurance"),
    MSA("Message Acknowledgement"),
    NST("Statistics"),
    NTE("Notes And Comments"),
    OBX("Result"),
    PD1("Patient Demographics"),
    PID("Patient Identification"),
    PV1("Patient Visit"),
    PR1("Procedures"),
    RX1("Pharmacy Order");




    private final String value;

    private Headers(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }
    }