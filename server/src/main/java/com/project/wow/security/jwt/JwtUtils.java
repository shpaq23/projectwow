package com.project.wow.security.jwt;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.project.wow.dao.entity.User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import java.security.SignatureException;
import java.util.Date;

@Component
public class JwtUtils {
  private static final Logger logger = LoggerFactory.getLogger(JwtUtils.class);

  @Value("${projectwow.app.jwtSecret}")
  private String jwtSecret;

  @Value("${projectwow.app.jwtExpirationMs}")
  private int jwtExpirationMs;

  public String createToken(User user) {
    try {
      Algorithm algorithm = Algorithm.HMAC256(jwtSecret);
      return JWT.create()
        .withSubject(user.getEmail())
        .withIssuedAt(new Date())
        .withExpiresAt(new Date((new Date()).getTime() + jwtExpirationMs))
        .withClaim("id", user.getId())
        .sign(algorithm);
    } catch (JWTCreationException exception) {
      System.out.println("could not create token");
      return null;
    }


  }

  public String getUserMailFromJwtToken(String token) {
    try {
      Algorithm algorithm = Algorithm.HMAC256(jwtSecret);
      JWTVerifier verifier = JWT.require(algorithm)
        .build();
      DecodedJWT jwt = verifier.verify(token);
      return jwt.getSubject();
    } catch (JWTVerificationException exception) {
      System.out.println("Error while parsing JWT");
      return null;
    }
  }


  public boolean validateJwtToken(String token) {
    try {
      Algorithm algorithm = Algorithm.HMAC256(jwtSecret);
      JWTVerifier verifier = JWT.require(algorithm)
        .build(); //Reusable verifier instance
      DecodedJWT jwt = verifier.verify(token);
      return true;
    } catch (JWTVerificationException exception) {
      System.out.println("Error while parsing token");
    }
    return false;
  }
}
