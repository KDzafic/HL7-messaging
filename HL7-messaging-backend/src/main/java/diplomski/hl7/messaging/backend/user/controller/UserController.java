package diplomski.hl7.messaging.backend.user.controller;

import diplomski.hl7.messaging.backend.message.domain.Message;
import diplomski.hl7.messaging.backend.security.jwtconfig.JwtUserDto;
import diplomski.hl7.messaging.backend.user.domain.User;
import diplomski.hl7.messaging.backend.user.domain.dto.ChangeUserInfoDto;
import diplomski.hl7.messaging.backend.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/user")
public class UserController {

    private final UserService userService;

    @GetMapping("/filter/email")
    public ResponseEntity<List<User>> searchByEmail(@RequestParam String email) {
        return ResponseEntity.ok(userService.getUserByEmail(email));
    }

    @DeleteMapping(value = "/delete")
    public void deleteUser(@RequestParam String userId) {
        userService.delete(userId);
    }

    @GetMapping("/get")
    public ResponseEntity<User> getUser(JwtUserDto jwtUserDto) {
        return ResponseEntity.ok(userService.getUser(jwtUserDto.getUserId()));
    }

    @GetMapping("/get/notifications")
    public ResponseEntity<List<Message>> getUserNotifications(JwtUserDto jwtUserDto) {
        return ResponseEntity.ok(userService.getUserNotifications(jwtUserDto.getUserId()));
    }

    @PutMapping("/update")
    public ResponseEntity<User> updateUser(@RequestBody ChangeUserInfoDto changeUserInfoDto, JwtUserDto jwtUserDto) {
        return ResponseEntity.ok(userService.updateUser(changeUserInfoDto, jwtUserDto.getUserId()));
    }
}
