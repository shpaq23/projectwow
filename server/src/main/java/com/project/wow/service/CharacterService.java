package com.project.wow.service;

import com.project.wow.dao.entity.Character;
import com.project.wow.dao.entity.User;
import com.project.wow.dto.CharacterRequest;
import com.project.wow.exception.CannotCreateCharacterException;
import com.project.wow.exception.EntityAlreadyExistsException;
import com.project.wow.repository.CharacterRepository;
import com.project.wow.repository.UserRepository;
import com.project.wow.utils.mappers.CharacterMapper;
import org.mapstruct.factory.Mappers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;

@Service
public class CharacterService {

    private final CharacterRepository characterRepository;
    private final UserRepository userRepository;

    private final CharacterMapper characterMapper = Mappers.getMapper(CharacterMapper.class);

    @Autowired
    public CharacterService(CharacterRepository characterRepository, UserRepository userRepository) {
        this.characterRepository = characterRepository;
        this.userRepository = userRepository;
    }

    public Character create(CharacterRequest request) {
        User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        if (user.getCharacter() == null) {
            Character character = characterMapper.toEntity(request);
            if (!characterRepository.findAllByNickname(character.getNickname()).isEmpty()) {
                throw new EntityAlreadyExistsException(Character.class);
            } else {
                //TODO mapper character i user w nim
                user.setCharacter(character);
                character = characterRepository.save(character);
                userRepository.save(user);
                return character;
            }
        } else {
            throw new CannotCreateCharacterException("User already has a character");
        }
    }
}
