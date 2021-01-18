package com.project.wow.repository;

import com.project.wow.dao.entity.Character;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CharacterRepository extends JpaRepository<Character,Long> {

    List<Character> findAllByNickname(String nickname);
}
