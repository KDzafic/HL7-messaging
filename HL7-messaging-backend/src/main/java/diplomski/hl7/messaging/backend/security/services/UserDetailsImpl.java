package diplomski.hl7.messaging.backend.security.services;

import com.fasterxml.jackson.annotation.JsonIgnore;
import diplomski.hl7.messaging.backend.user.domain.User;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Objects;

public class UserDetailsImpl implements UserDetails {
    private static final long serialVersionUID = 1L;

    private final String id;

    private final String username;

    private final String email;

    @JsonIgnore
    private final String password;

    private final String role;

    private Collection<GrantedAuthority> authorities = new ArrayList<>();


    public UserDetailsImpl(String id, String username, String email, String password, String role) {
        SimpleGrantedAuthority auth = new SimpleGrantedAuthority(role);
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.role = role;
        this.authorities.add(auth);
    }

    public static UserDetailsImpl build(User user, String role) {

        return new UserDetailsImpl(
                user.getId(),
                "",
                user.getEmail(),
                user.getPassword(),
                role);
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    public String getId() {
        return id;
    }

    public String getRole() {
        return role;
    }

    public String getEmail() {
        return email;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return username;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        UserDetailsImpl user = (UserDetailsImpl) o;
        return Objects.equals(id, user.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, username, email, password, role, authorities);
    }
}
