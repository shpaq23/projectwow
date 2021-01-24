package com.project.wow.dto.character;


import com.project.wow.dto.character.apperance.*;
import com.project.wow.dto.character.equipment.CharacterRace;

public class CharacterRequest {

    private String nickname;

    private int health;

    private int mana;

    private String specialization;

    private CharacterRace race;

    private CharacterSex gender;

    private CharacterEyesColor eyesColor;

    private CharacterEars ears;

    private CharacterLegs legs;

//    private CharacterClothes characterClothes;

    private CharacterMail characterMail;

    private String hair;

    private String special;

    public String getHair() {
        return hair;
    }

    public void setHair(String hair) {
        this.hair = hair;
    }

    public String getSpecial() {
        return special;
    }

    public void setSpecial(String special) {
        this.special = special;
    }


    public CharacterMail getCharacterMail() {
        return characterMail;
    }

    public void setCharacterMail(CharacterMail characterMail) {
        this.characterMail = characterMail;
    }

//    public CharacterClothes getCharacterClothes() {
//        return characterClothes;
//    }
//
//    public void setCharacterClothes(CharacterClothes characterClothes) {
//        this.characterClothes = characterClothes;
//    }

    public CharacterLegs getLegs() {
        return legs;
    }

    public void setLegs(CharacterLegs legs) {
        this.legs = legs;
    }

    public CharacterEars getEars() {
        return ears;
    }

    public void setEars(CharacterEars ears) {
        this.ears = ears;
    }

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

    public String getSpecialization() {
        return specialization;
    }

    public void setSpecialization(String specialization) {
        this.specialization = specialization;
    }

    public CharacterRace getRace() {
        return race;
    }

    public void setRace(CharacterRace race) {
        this.race = race;
    }

    public CharacterSex getGender() {
        return gender;
    }

    public void setGender(CharacterSex gender) {
        this.gender = gender;
    }

    public CharacterEyesColor getEyesColor() {
        return eyesColor;
    }

    public void setEyesColor(CharacterEyesColor eyesColor) {
        this.eyesColor = eyesColor;
    }
}
