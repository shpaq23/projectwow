package com.project.wow.controllers.character;

import com.project.wow.dao.entity.Character;
import com.project.wow.dto.character.CharacterDTO;
import com.project.wow.dto.character.CharacterRequest;
import com.project.wow.exception.EntityNotFoundException;
import com.project.wow.repository.CharacterRepository;
import com.project.wow.service.CharacterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    @GetMapping
    public List<Character> getCharacterList() {
        return characterRepository.findAll();
    }

    @GetMapping("/character/{id}")
    public Character getCharacter(@PathVariable("id") Long id) {
        return characterRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Character not found", Character.class));
    }

    @PostMapping("/character")
    public ResponseEntity<CharacterDTO> createCharacter(@RequestBody CharacterRequest request) {
        return new ResponseEntity<>(characterService.create(request), HttpStatus.CREATED);
    }

}
