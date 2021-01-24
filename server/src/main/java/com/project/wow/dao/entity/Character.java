package com.project.wow.dao.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.project.wow.dto.character.equipment.CharacterRace;

import javax.persistence.*;
import java.util.Objects;

@Entity
public class Character {

    @Id
    @GeneratedValue
    private Long id;

    private String nickname;

    private int health;

    private int mana;

    @Enumerated(EnumType.STRING)
    private CharacterRace race;

    private String specialization;

    @JsonIgnore
    @OneToOne(cascade = CascadeType.REMOVE)
    private User user;


    @OneToOne
    @JoinColumn(name = "CHARACTERSTATS_ID")
    private CharacterStats characterStats;


    public Character() {
    }

    public void setUser(User owner) {
        this.user = owner;
    }

    private boolean sameAsFormer(User newOwner) {
        return Objects.equals(user, newOwner);
    }

    public CharacterStats getCharacterStats() {
        return characterStats;
    }

    public void setCharacterStats(CharacterStats characterStats) {
        this.characterStats = characterStats;
    }

    public int getHealth() {
        return health;
    }

    public void setHealth(int health) {
        this.health = health;
    }

    public int getMana() {
        return mana;
    }

    public void setMana(int mana) {
        this.mana = mana;
    }

    public CharacterRace getRace() {
        return race;
    }

    public void setRace(CharacterRace race) {
        this.race = race;
    }

    public String getNickname() {
        return nickname;
    }

    public void setNickname(String gender) {
        this.nickname = gender;
    }

    public String getSpecialization() {
        return specialization;
    }

    public void setSpecialization(String specjalization) {
        this.specialization = specjalization;
    }

    public User getUser() {
        return user;
    }


    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }
}
