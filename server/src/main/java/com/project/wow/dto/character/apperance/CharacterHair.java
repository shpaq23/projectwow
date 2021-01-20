package com.project.wow.dto.character.apperance;

import java.util.Map;

public class CharacterHair {

    private Map<HairColor,FemaleHairType> femaleHair;
    private Map<HairColor,MaleHairType> maleHair;


    public Map<HairColor, FemaleHairType> getFemaleHair() {
        return femaleHair;
    }

    public void setFemaleHair(Map<HairColor, FemaleHairType> femaleHair) {
        this.femaleHair = femaleHair;
    }

    public Map<HairColor, MaleHairType> getMaleHair() {
        return maleHair;
    }

    public void setMaleHair(Map<HairColor, MaleHairType> maleHair) {
        this.maleHair = maleHair;
    }
}
