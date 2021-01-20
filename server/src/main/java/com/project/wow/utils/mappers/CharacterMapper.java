package com.project.wow.utils.mappers;

import com.project.wow.dao.entity.Character;
import com.project.wow.dto.character.CharacterRequest;
import org.mapstruct.Mapper;

@Mapper
public interface CharacterMapper {
    Character toEntity(CharacterRequest request);
}
