package diplomski.hl7.messaging.backend.security.services;

import diplomski.hl7.messaging.backend.user.domain.User;
import diplomski.hl7.messaging.backend.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class UserDetailsServiceImpl implements UserDetailsService {

    private final UserRepository userRepository;

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("User Not Found with username: " + email));
//        Role role = roleRepository.findById(user.getRole().getId()).orElseThrow(() -> new RoleNotFoundException(user.getRole().getId()));
        return UserDetailsImpl.build(user, user.getRole());
    }

}
