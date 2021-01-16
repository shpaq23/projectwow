package com.project.wow.controllers.user;

import com.project.wow.dao.entity.User;
import com.project.wow.dao.UserDetails;
import com.project.wow.dto.LoginRequest;
import com.project.wow.dto.RegisterRequest;
import com.project.wow.dto.TokenDetails;
import com.project.wow.exception.EntityNotFoundException;
import com.project.wow.repository.UserRepository;
import com.project.wow.service.UserService;
import com.project.wow.utils.mappers.UserMapper;
import lombok.NonNull;
import org.mapstruct.factory.Mappers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/users")
public class UserController {

    public final UserRepository userRepository;
    public final UserService userService;

    private final UserMapper userMapper = Mappers.getMapper(UserMapper.class);

    @Autowired
    public UserController(UserRepository userRepository, UserService userService) {
        this.userRepository = userRepository;
        this.userService = userService;
    }

    @GetMapping("/hello")
    public String hello() {
        return "Hello world spring";
    }

    @GetMapping("/user/{id}")
    public UserDetails getUser(@PathVariable("id") Long id) {
        return userMapper
                .toDetailsDTO(userRepository.findById(id)
                        .orElseThrow(() -> new EntityNotFoundException("User with id " + id + "not found", User.class)));
    }


}
