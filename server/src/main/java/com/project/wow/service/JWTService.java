package com.project.wow.service;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.project.wow.dao.entity.User;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
import org.springframework.util.StringUtils;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Date;


public class JWTService extends BasicAuthenticationFilter {

  //TODO should be in keystore file
  static final String SECRET = "}fxg&ByFZBt%9Yr";

  public JWTService(AuthenticationManager authenticationManager) {
    super(authenticationManager);
  }

  @Override
  protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain) throws IOException, ServletException {

    String token = parseJwt(request);

    DecodedJWT dtoken = JWT.decode(token);

//    UsernamePasswordAuthenticationFilter authenticationFilter = ;

//    SecurityContextHolder.getContext().setAuthentication();


  }

  public String createToken(User user) {
    try {
      Algorithm algorithm = Algorithm.HMAC256(SECRET);
      return JWT.create()
        .withSubject(user.getEmail())
        .withIssuedAt(new Date(System.currentTimeMillis()))
        .withExpiresAt(new Date(System.currentTimeMillis() + 1000 * 60 * 15))
        .withClaim("id", user.getId())
        .sign(algorithm);
    } catch (JWTCreationException exception) {
      System.out.println("could not create token");
      return null;
    }
  }

  private String parseJwt(HttpServletRequest request) {
    String headerAuth = request.getHeader("Authorization");

    if (StringUtils.hasText(headerAuth) && headerAuth.startsWith("Bearer ")) {
      return headerAuth.substring(7, headerAuth.length());
    }

    return null;
  }
}
