package br.com.FlashMind.infra.security;

import br.com.FlashMind.domain.user.User;
import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneOffset;

@Service
public class TokenService {

    @Value("root")
    private String secret;

    public String generateJWT(User user) {
        Algorithm algorithm = Algorithm.HMAC256(secret);
        String jwt = JWT.create()
                .withIssuer("FlashMind")
                .withSubject(user.getLogin())
                .withExpiresAt(this.getExpirationalDate())
                .withClaim("id", user.getId())
                .sign(algorithm);

        return jwt;
    }

    private Instant getExpirationalDate() {
        Instant instant = LocalDateTime.now().plusHours(2).toInstant(ZoneOffset.of("-03:00"));

        return instant;
    }

    public String getSubject(String tokenJWT) {
        Algorithm algorithm = Algorithm.HMAC256(secret);
        String subject = JWT.require(algorithm)
                .withIssuer("FlashMind")
                .build()
                .verify(tokenJWT)
                .getSubject();

        return subject;
    }

}
