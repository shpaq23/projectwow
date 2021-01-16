package com.project.wow.controllers.character;

import com.project.wow.dao.entity.Character;
import com.project.wow.exception.EntityNotFoundException;
import com.project.wow.repository.CharacterRepository;
import com.project.wow.service.CharacterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/characters")
public class CharacterController {

    private final CharacterRepository characterRepository;
    private final CharacterService characterService;

    @Autowired
    public CharacterController(CharacterRepository characterRepository, CharacterService characterService) {
        this.characterRepository = characterRepository;
        this.characterService = characterService;
    }

    @GetMapping("/character/{id}")
    public Character getCharacter(@PathVariable("id") Long id) {
        return characterRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Character not found", Character.class));
    }


}
