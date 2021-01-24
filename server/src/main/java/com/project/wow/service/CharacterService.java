package com.project.wow.service;

import com.project.wow.dao.entity.Character;
import com.project.wow.dao.entity.User;
import com.project.wow.dto.character.*;
import com.project.wow.dto.character.apperance.*;
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
import org.apache.commons.lang3.EnumUtils;


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

    public CharacterDTO create(CharacterRequest request) {
        User user = getCurrentUser();
        if (user.getCharacter() == null) {
            if (validateCharacterParams(request)) {
                Character character = characterMapper.toEntity(request);
                if (!characterRepository.findAllByNickname(character.getNickname()).isEmpty()) {
                    throw new EntityAlreadyExistsException(Character.class);
                } else {
                    user.setCharacter(character);
                    character = characterRepository.save(character);
                    userRepository.save(user);
                    return characterMapper.toDetailsDTO(character);
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
        if (request.getGender().equals(CharacterSex.MALE)) {
            return checkParamsForMan(request);
        } else if (request.getGender().equals(CharacterSex.FEMALE)) {
            return checkParamsForFemale(request);
        } else throw new InvalidRequestException("There is no such sex for character");
    }

    private boolean checkParamsForMan(CharacterRequest request) {
        if (request.getRace().equals(CharacterRace.DARK_ELF) && request.getEars().equals(CharacterEars.BIG_EARS)) {
            return false;
        } else if (request.getCharacterClothes().getFemaleClothes() != null) {
            return false;
        } else if (!EnumUtils.isValidEnum(MaleHairType.class, request.getCharacterHair())) {
            return false;
        } else return EnumUtils.isValidEnum(MaleSpecial.class, request.getSpecial());
    }

    private boolean checkParamsForFemale(CharacterRequest request) {
        if (request.getRace().equals(CharacterRace.SKELETON)) {
            return false;
        } else if (request.getRace().equals(CharacterRace.DARK_ELF) && request.getEars().equals(CharacterEars.BIG_EARS)) {
            return false;
        } else if (request.getCharacterClothes().getMaleClothes() != null) {
            return false;
        } else return EnumUtils.isValidEnum(FemaleClothes.class, request.getCharacterHair());
    }
}
