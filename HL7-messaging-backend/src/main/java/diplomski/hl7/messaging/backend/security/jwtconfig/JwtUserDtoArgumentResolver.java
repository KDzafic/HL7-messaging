package diplomski.hl7.messaging.backend.security.jwtconfig;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.MethodParameter;
import org.springframework.http.HttpStatus;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.support.WebDataBinderFactory;
import org.springframework.web.context.request.NativeWebRequest;
import org.springframework.web.context.request.ServletWebRequest;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.method.support.ModelAndViewContainer;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.constraints.NotNull;
import java.util.Arrays;
import java.util.Optional;
import java.util.stream.Stream;

public class JwtUserDtoArgumentResolver implements HandlerMethodArgumentResolver {
    private static final Logger LOGGER = LoggerFactory.getLogger(JwtUserDtoArgumentResolver.class);
    private final ObjectMapper objectMapper;
    private final String authorizationCookie = "HL7_JWT";

    public JwtUserDtoArgumentResolver(final ObjectMapper objectMapper) {
        this.objectMapper = objectMapper;
    }

    public boolean supportsParameter(MethodParameter parameter) {
        return parameter.getParameter().getType() == JwtUserDto.class;
    }

    public Object resolveArgument(@NotNull MethodParameter parameter, ModelAndViewContainer mavContainer, @NotNull NativeWebRequest webRequest, WebDataBinderFactory binderFactory) throws JsonProcessingException {
        String token = this.extractJwtFromRequest(((ServletWebRequest) webRequest).getRequest());

        if (StringUtils.isEmpty(token)) {
            throw new RuntimeException(HttpStatus.UNAUTHORIZED + "No authorization token present!");
        } else {
            JwtToken jwtToken = this.objectMapper.readValue(JwtTokenDecoder.decode(token), JwtToken.class);
            return JwtUserDto.builder()
                    .userId(jwtToken.getUserId())
                    .role(jwtToken.getRole())
                    .build();
        }
    }

    private String extractJwtFromHeader(HttpServletRequest request) {
        return request.getHeader("Authorization");
    }

    private String extractJwtFromCookie(HttpServletRequest request) {
        return (String) Stream.ofNullable(request.getCookies()).flatMap(Arrays::stream).filter((cookie) -> {
            return "HL7_JWT".equals(cookie.getName());
        }).findFirst().map(Cookie::getName).orElse("");
    }

    private String extractJwtFromRequest(HttpServletRequest request) {
        return (String) Optional.ofNullable(this.extractJwtFromHeader(request)).orElse(this.extractJwtFromCookie(request));
    }
}