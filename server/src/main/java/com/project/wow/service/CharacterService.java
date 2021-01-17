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
import org.springframework.stereotype.Service;

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

    public Character create(String email, CharacterRequest request) {
        User user = userRepository.findUserByEmail(email);
        if (user.getCharacter() == null) {
            Character character = characterMapper.toEntity(request);
            if (characterRepository.existsById(character.getId())) {
                throw new EntityAlreadyExistsException(Character.class);
            } else {
                return characterRepository.save(character);
            }
        } else {
            throw new CannotCreateCharacterException("User already has a character");
        }
    }
}
