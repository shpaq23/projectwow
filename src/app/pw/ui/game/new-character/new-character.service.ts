import { Injectable } from '@angular/core';
import { CharacterAbilities } from 'src/app/pw/infrastructure/character/CharacterAbilities';
import { CharacterRace } from 'src/app/pw/infrastructure/character/CharacterRace';
import { CharacterSpecialization } from 'src/app/pw/infrastructure/character/CharacterSpecialization';
import { CharacterStats } from 'src/app/pw/infrastructure/character/CharacterStats';

export interface NewCharacterStructure {
  availableRaces: {
    male: CharacterRace;
    female: CharacterRace
    availableSpecializations: {
      specialization: CharacterSpecialization
    }[];
    racialAbilities: CharacterAbilities
  }[];
}

@Injectable({ providedIn: 'root' })
export class NewCharacterService {


  getNewCharacterStructure(): NewCharacterStructure {
    return null;
  }

  calculateCharacterStats(race: CharacterRace, specialization: CharacterSpecialization): CharacterStats {
    return null;
  }

}
