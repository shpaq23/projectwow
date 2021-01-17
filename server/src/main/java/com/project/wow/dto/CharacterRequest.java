package com.project.wow.dto;

import org.springframework.lang.NonNull;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

public class CharacterRequest {

    @Min(value = 0)
    private int health;

    @Min(value = 0)
    private int mana;

    @NotNull
    private String race;

    @NotNull
    private String specialization;

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

    @NonNull
    public String getRace() {
        return race;
    }

    public void setRace(@NonNull String race) {
        this.race = race;
    }

    @NonNull
    public String getSpecialization() {
        return specialization;
    }

    public void setSpecialization(@NonNull String specialization) {
        this.specialization = specialization;
    }
}
