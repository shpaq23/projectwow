package com.project.wow.service;

import com.project.wow.dao.entity.Character;
import com.project.wow.dao.entity.User;
import com.project.wow.dto.character.*;
import com.project.wow.dto.character.apperance.CharacterLegs;
import com.project.wow.dto.character.apperance.CharacterNose;
import com.project.wow.dto.character.apperance.CharacterSex;
import com.project.wow.dto.character.equipment.CharacterRace;
import com.project.wow.exception.CannotCreateCharacterException;
import com.project.wow.exception.EntityAlreadyExistsException;
import com.project.wow.exception.InvalidRequestException;
import com.project.wow.repository.CharacterRepository;
import com.project.wow.repository.UserRepository;
import com.project.wow.utils.mappers.CharacterMapper;
import org.mapstruct.factory.Mappers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
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

    public Character create(CharacterRequest request) {
        User user = getCurrentUser();
        if (user.getCharacter() == null) {
            if (validateCharacterParams(request)) {
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
                throw new InvalidRequestException("Cannot create character with given params!");
            }
        } else {
            throw new CannotCreateCharacterException("User already has a character");
        }
    }

    private User getCurrentUser() {
        return (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
    }

    private boolean validateCharacterParams(CharacterRequest request) {
        if (request.getSex().equals(CharacterSex.MALE)) {
            return checkParamsForMan(request);
        } else if (request.getSex().equals(CharacterSex.FEMALE)) {
            return checkParamsForFemale(request);
        } else throw new InvalidRequestException("There is no such sex for character");
    }

    private boolean checkParamsForMan(CharacterRequest request) {
        if (request.getRace().equals(CharacterRace.DARK_ELF) && request.getNose().equals(CharacterNose.BIG_EARS)) {
            return false;
        }
        if (request.getLegs().equals(CharacterLegs.SARA_LEGGINGS)) {
            return false;
        }
        if (request.getCharacterClothes().getFemaleClothes() != null) {
            return false;
        }
        if (!request.getCharacterHair().getFemaleHair().isEmpty()) {
            return false;
        }
        //TODO rest parameters

        else {
            return true;
        }
    }

    private boolean checkParamsForFemale(CharacterRequest request) {
        if (request.getRace().equals(CharacterRace.SKELETON)) {
            return false;
        }
        if (request.getRace().equals(CharacterRace.DARK_ELF) && request.getNose().equals(CharacterNose.BIG_EARS)) {
            return false;
        }
        if (request.getLegs().equals(CharacterLegs.ROBE_SKIRT)) {
            return false;
        }
        if (request.getCharacterClothes().getMaleClothes() != null) {
            return false;
        }
        if (!request.getCharacterHair().getMaleHair().isEmpty()) {
            return false;
        } else {
            return true;
        }


    }


}
