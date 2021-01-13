package com.project.wow.controllers.user;

import com.project.wow.dao.entity.User;
import com.project.wow.dto.LoginRequest;
import com.project.wow.dto.RegisterRequest;
import com.project.wow.repository.UserRepository;
import com.project.wow.service.UserService;
import lombok.NonNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

  public UserRepository userRepository;
  public UserService userService;

  @Autowired
  public UserController(UserRepository userRepository, UserService userService) {
    this.userRepository = userRepository;
    this.userService = userService;
  }

  @GetMapping("/auth/hello")
  public String hello() {
    return "Hello world spring";
  }


  @PostMapping("/auth/register")
  public boolean register(@RequestBody @NonNull RegisterRequest request) {
    return userService.registerUser(request);
  }


  @PostMapping("/auth/login")
  public String login(@RequestBody @NonNull LoginRequest loginRequest) {

    User u = new User();
    u.setUserName(loginRequest.getUserName());
    u.setPassword(loginRequest.getPassword());
    String token = userService.login(u);

    return "true";
  }


}
