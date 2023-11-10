package diplomski.hl7.messaging.backend.security.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping
public class TestController {

    @GetMapping("/api/restricted")
    
    public String test() {

        return "You successfully accessed protected content.";
    }


}
