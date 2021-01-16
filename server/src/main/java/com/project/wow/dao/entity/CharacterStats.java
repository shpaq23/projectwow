package com.project.wow.dao.entity;

import javax.persistence.*;

@Entity
@Table(name = "CHARACTERSTATS")
public class CharacterStats {

    @Id
    @GeneratedValue
    private Long id;

    private int agility;
    private int intellect;
    private int strength;
    private int stamina;
    private int spirit;

    @OneToOne(mappedBy = "characterStats")
    private Character character;

    public CharacterStats() {
    }

    public Character getCharacter() {
        return character;
    }

    public void setCharacter(Character character) {
        this.character = character;
    }

    public int getAgility() {
        return agility;
    }

    public void setAgility(int agility) {
        this.agility = agility;
    }

    public int getIntellect() {
        return intellect;
    }

    public void setIntellect(int intellect) {
        this.intellect = intellect;
    }

    public int getStrength() {
        return strength;
    }

    public void setStrength(int strength) {
        this.strength = strength;
    }

    public int getStamina() {
        return stamina;
    }

    public void setStamina(int stamina) {
        this.stamina = stamina;
    }

    public int getSpirit() {
        return spirit;
    }

    public void setSpirit(int spirit) {
        this.spirit = spirit;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }
}
