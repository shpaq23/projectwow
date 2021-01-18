package com.project.wow.dto.character;


import com.project.wow.dto.character.apperance.*;
import com.project.wow.dto.character.equipment.CharacterRace;

public class CharacterRequest {

//    @NotNull
    private String nickname;

//    @Min(value = 0)
    private int health;

//    @Min(value = 0)
    private int mana;

//    @NotNull
    private String specialization;

    //    @NotNull
    private CharacterRace race;

    private CharacterSex sex;

    private CharacterEyesColor eyesColor;

    private CharacterNose nose;

    private CharacterLegs legs;

    private CharacterClothes characterClothes;

    private CharacterMail characterMail;

    private CharacterHair characterHair;


    public CharacterHair getCharacterHair() {
        return characterHair;
    }

    public void setCharacterHair(CharacterHair characterHair) {
        this.characterHair = characterHair;
    }

    public CharacterMail getCharacterMail() {
        return characterMail;
    }

    public void setCharacterMail(CharacterMail characterMail) {
        this.characterMail = characterMail;
    }

    public CharacterClothes getCharacterClothes() {
        return characterClothes;
    }

    public void setCharacterClothes(CharacterClothes characterClothes) {
        this.characterClothes = characterClothes;
    }

    public CharacterLegs getLegs() {
        return legs;
    }

    public void setLegs(CharacterLegs legs) {
        this.legs = legs;
    }

    public CharacterNose getNose() {
        return nose;
    }

    public void setNose(CharacterNose nose) {
        this.nose = nose;
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

    public CharacterSex getSex() {
        return sex;
    }

    public void setSex(CharacterSex sex) {
        this.sex = sex;
    }

    public CharacterEyesColor getEyesColor() {
        return eyesColor;
    }

    public void setEyesColor(CharacterEyesColor eyesColor) {
        this.eyesColor = eyesColor;
    }
}
