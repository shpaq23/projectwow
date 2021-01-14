package com.project.wow.service;

import com.project.wow.configuration.WebSecurityConfig;
import com.project.wow.dao.entity.User;
import com.project.wow.dto.RegisterRequest;
import com.project.wow.repository.UserRepository;
import com.project.wow.security.jwt.JwtUtils;
import com.project.wow.utils.EmailValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.sql.Timestamp;


@Service
public class UserService {

  public UserRepository userRepository;

  @Autowired
  private WebSecurityConfig webSecurityConfig;

  @Autowired
  private EmailValidator emailValidator;

  @Autowired
  private JwtUtils jwtUtils;

  @Autowired
  public UserService(UserRepository userRepository) {
    this.userRepository = userRepository;
  }


  public boolean registerUser(RegisterRequest request) {
    if (!emailValidator.validateEmail(request.getEmail())) {
      System.out.println("Email is not valid");
      return false;
    }
    if (userRepository.findUserByEmail(request.getEmail()) != null) {
      System.out.println("User with given mail already exist");
      //TODO throw exception
      return false;
    } else {
      //TODO use mapper
      User user = new User();
      user.setUserName(request.getUserName());
      user.setEmail(request.getEmail());
      user.setPassword(webSecurityConfig.passwordEncoder().encode(request.getPassword()));
      user.setLastLogin(new Timestamp(System.currentTimeMillis()));
      userRepository.save(user);
      return true;
    }
  }

  public String login(User user) {

    user = userRepository.findUserByEmail(user.getUserName());

    if (user == null) {
      //TODO check login and password
      //
      System.out.println("Wrong username or password");
      return null;
    } else {
      return jwtUtils.createToken(user);
    }
  }

}
