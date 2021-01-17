package com.project.wow.dao.entity;

import javax.persistence.*;

@Entity
public class Character {

    @Id
    @GeneratedValue
    private Long id;

    private int health;

    private int mana;

    //todo change to enum
    private String race;

    private String gender;

    private String specialization;

    @OneToOne
    @JoinColumn(name = "USER_ID")
    private User owner;


    @OneToOne
    @JoinColumn(name = "CHARACTERSTATS_ID")
    private CharacterStats characterStats;


    public Character(){};

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

    public String getRace() {
        return race;
    }

    public void setRace(String race) {
        this.race = race;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getSpecialization() {
        return specialization;
    }

    public void setSpecialization(String specjalization) {
        this.specialization = specjalization;
    }

    public User getOwner() {
        return owner;
    }

    public void setOwner(User owner) {
        this.owner = owner;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }
}
