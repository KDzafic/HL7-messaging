package diplomski.hl7.messaging.backend.user.controller;

import diplomski.hl7.messaging.backend.security.jwt.JwtUtils;
import diplomski.hl7.messaging.backend.security.jwtconfig.JwtUserDto;
import diplomski.hl7.messaging.backend.security.services.UserDetailsImpl;
import diplomski.hl7.messaging.backend.user.domain.User;
import diplomski.hl7.messaging.backend.user.domain.dto.LoginRequestDto;
import diplomski.hl7.messaging.backend.user.domain.dto.SignupRequestDto;
import diplomski.hl7.messaging.backend.user.domain.dto.SignupResponseDto;
import diplomski.hl7.messaging.backend.user.repository.UserRepository;
import diplomski.hl7.messaging.backend.user.service.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final JwtUtils jwtUtils;
    private final UserRepository userRepository;
    private final AuthenticationManager authenticationManager;
    private final UserService userService;

    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequestDto loginRequestDto) {

        Authentication authentication = authenticationManager
                .authenticate(new UsernamePasswordAuthenticationToken(loginRequestDto.getEmail(), loginRequestDto.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();

        ResponseCookie jwtCookie = jwtUtils.generateJwtCookie(userDetails);

        return ResponseEntity.ok().body(jwtCookie.getValue());
    }

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequestDto signUpRequestDto) {
        if (userRepository.existsByEmail(signUpRequestDto.getEmail())) {
            return ResponseEntity.badRequest().body(new SignupResponseDto("Error: Email is already in use!"));
        }
        userService.createUser(signUpRequestDto);

        return ResponseEntity.ok(new SignupResponseDto("User registered successfully!"));
    }

    @PostMapping("/signout")
    public ResponseEntity<?> logoutUser(JwtUserDto jwtUserDto) {
        User user = userRepository.findById(jwtUserDto.getUserId()).get();
        user.setLastActivity(LocalDateTime.now());
        userRepository.save(user);
        ResponseCookie cookie = jwtUtils.getCleanJwtCookie();
        return ResponseEntity.ok().header(HttpHeaders.SET_COOKIE, cookie.toString())
                .body(new SignupResponseDto("You've been signed out!"));
    }
}
