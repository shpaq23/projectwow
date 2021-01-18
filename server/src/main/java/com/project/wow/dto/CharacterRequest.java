package com.project.wow.dto;


import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

public class CharacterRequest {

    @NotNull
    private String nickname;

    @Min(value = 0)
    private int health;

    @Min(value = 0)
    private int mana;

    @NotNull
    private String race;

    @NotNull
    private String specialization;

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

    public String getRace() {
        return race;
    }

    public void setRace(String race) {
        this.race = race;
    }

    public String getSpecialization() {
        return specialization;
    }

    public void setSpecialization(String specialization) {
        this.specialization = specialization;
    }
}
