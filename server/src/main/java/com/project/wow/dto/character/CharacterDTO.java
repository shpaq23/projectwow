package com.project.wow.dto.character;

import com.project.wow.dao.entity.CharacterStats;
import com.project.wow.dto.character.equipment.CharacterRace;

public class CharacterDTO {
    private String nickname;
    private int health;
    private int mana;
    private CharacterRace race;
    private String specialization;
    private String ownerMail;
    private CharacterStats characterStats;


    public String getNickname() {
        return nickname;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
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

    public String getSpecialization() {
        return specialization;
    }

    public void setSpecialization(String specialization) {
        this.specialization = specialization;
    }

    public String getOwnerMail() {
        return ownerMail;
    }

    public void setOwnerMail(String ownerMail) {
        this.ownerMail = ownerMail;
    }

    public CharacterStats getCharacterStats() {
        return characterStats;
    }

    public void setCharacterStats(CharacterStats characterStats) {
        this.characterStats = characterStats;
    }
}
