package com.project.wow.controllers.character;

import com.project.wow.dao.entity.Character;
import com.project.wow.dto.CharacterRequest;
import com.project.wow.exception.EntityNotFoundException;
import com.project.wow.repository.CharacterRepository;
import com.project.wow.service.CharacterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping("/{username}/character")
    public ResponseEntity<Character> createCharacter(@PathVariable("username") String username, @RequestParam CharacterRequest request) {
        return new ResponseEntity<>(characterService.create(username,request), HttpStatus.CREATED);
    }

}
