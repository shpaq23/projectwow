package com.project.wow.service;

import com.project.wow.dao.entity.Character;
import com.project.wow.dao.entity.User;
import com.project.wow.dto.CharacterRequest;
import com.project.wow.dto.LoginRequest;
import com.project.wow.dto.RegisterRequest;
import com.project.wow.exception.EntityAlreadyExistsException;
import com.project.wow.exception.EntityNotFoundException;
import com.project.wow.exception.InvalidLoginOrPasswordEception;
import com.project.wow.exception.InvalidRequestException;
import com.project.wow.repository.CharacterRepository;
import com.project.wow.repository.UserRepository;
import com.project.wow.security.jwt.JwtUtils;
import com.project.wow.utils.EmailValidator;
import com.project.wow.utils.mappers.UserMapper;
import org.mapstruct.factory.Mappers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.transaction.Transactional;
import java.sql.Timestamp;


@Service
public class UserService {

    private final UserRepository userRepository;

    private final UserMapper userMapper = Mappers.getMapper(UserMapper.class);

    private final CharacterService characterService;
    private final CharacterRepository characterRepository;

    @Autowired
    private EmailValidator emailValidator;

    @Autowired
    private JwtUtils jwtUtils;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    public UserService(UserRepository userRepository, CharacterService characterService, CharacterRepository characterRepository) {
        this.userRepository = userRepository;
        this.characterService = characterService;
        this.characterRepository = characterRepository;
    }


    public boolean registerUser(RegisterRequest request) {
        if (!emailValidator.validateEmail(request.getEmail())) {
            throw new InvalidRequestException("Given email is not valid: " + request.getEmail());
        }
        User user;
        if ((user = userRepository.findUserByEmail(request.getEmail())) != null) {
            throw new EntityAlreadyExistsException("User with given email: " + user.getEmail() + " already exists", User.class);
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


    @GetMapping("/{userMail}/character/{id}")
    public Character getCharacter(@PathVariable("id") Long id) {
        return characterRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Character not found", Character.class));
    }

    @PostMapping("/{userMail}/character")
    public ResponseEntity<Character> createCharacter(@PathVariable("username") String userMail, @RequestParam CharacterRequest request) {
        return new ResponseEntity<>(characterService.create(userMail, request), HttpStatus.CREATED);
    }


    private boolean checkUserAndPassword(String password, User user) {
        return passwordEncoder.matches(password, user.getPassword());
    }

    public User getUserByMail(String mail) {
        return userRepository.findUserByEmail(mail);
    }

}
