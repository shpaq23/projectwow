package com.project.wow.utils.mappers;

import com.project.wow.dao.entity.Character;
import com.project.wow.dto.character.CharacterDTO;
import com.project.wow.dto.character.CharacterRequest;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;

@Mapper
public interface CharacterMapper {
    Character toEntity(CharacterRequest request);

    @Mapping(target = "ownerMail", source = "user.email")
    CharacterDTO toDetailsDTO(Character character);
}
