package com.project.wow.dto.character.apperance;

public class CharacterClothes {

    private FemaleClothes femaleClothes;
    private MaleClothes maleClothes;

    public FemaleClothes getFemaleClothes() {
        return femaleClothes;
    }

    public void setFemaleClothes(FemaleClothes femaleClothes) {
        this.femaleClothes = femaleClothes;
    }

    public MaleClothes getMaleClothes() {
        return maleClothes;
    }

    public void setMaleClothes(MaleClothes maleClothes) {
        this.maleClothes = maleClothes;
    }
}
