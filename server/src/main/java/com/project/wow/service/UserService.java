package com.project.wow.service;

import com.project.wow.dao.entity.User;
import com.project.wow.dto.LoginRequest;
import com.project.wow.dto.RegisterRequest;
import com.project.wow.exception.EntityAlreadyExists;
import com.project.wow.exception.InvalidLoginOrPasswordEception;
import com.project.wow.exception.InvalidRequestException;
import com.project.wow.repository.UserRepository;
import com.project.wow.security.jwt.JwtUtils;
import com.project.wow.utils.EmailValidator;
import com.project.wow.utils.mappers.UserMapper;
import org.mapstruct.factory.Mappers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.sql.Timestamp;


@Service
public class UserService {

    private UserRepository userRepository;

    private UserMapper userMapper = Mappers.getMapper(UserMapper.class);

    @Autowired
    private EmailValidator emailValidator;

    @Autowired
    private JwtUtils jwtUtils;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }


    public boolean registerUser(RegisterRequest request) {
        if (!emailValidator.validateEmail(request.getEmail())) {
            throw new InvalidRequestException("Given email is not valid: " + request.getEmail());
        }
        User user;
        if ((user = userRepository.findUserByEmail(request.getEmail())) != null) {
            throw new EntityAlreadyExists("User with given email: " + user.getEmail() + " already exists", User.class);
        } else {
            user = userMapper.toEntityFromRequest(request);
            user.setPassword(passwordEncoder.encode(request.getPassword()));
            userRepository.save(user);
            return true;
        }
    }

    @Transactional(dontRollbackOn = InvalidLoginOrPasswordEception.class)
    public String login(LoginRequest request) {
        User user = userRepository.findUserByEmail(request.getEmail());
        if (user == null) {
            throw new InvalidLoginOrPasswordEception("Invalid login or password", User.class);
        }
        if (!checkUserAndPassword(request.getPassword(), user)) {
            user.setLastFailedLogin(new Timestamp(System.currentTimeMillis()));
            throw new InvalidLoginOrPasswordEception("Invalid login or password", User.class);
        } else {
            user.setLastSuccessfulLogin(new Timestamp(System.currentTimeMillis()));
            return jwtUtils.createToken(user);
        }
    }

    private boolean checkUserAndPassword(String password, User user) {
        return passwordEncoder.matches(password, user.getPassword());
    }

    public User getUserByMail(String mail) {
        return userRepository.findUserByEmail(mail);
    }

}
