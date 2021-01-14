import { CharacterGender } from 'src/app/pw/infrastructure/character/CharacterGender';
import { CharacterRace } from 'src/app/pw/infrastructure/character/CharacterRace';
import { CharacterSpecialization } from 'src/app/pw/infrastructure/character/CharacterSpecialization';
import { CharacterStats } from 'src/app/pw/infrastructure/character/CharacterStats';

export class Character {

  constructor(private readonly health: number,
              private readonly mana: number,
              private readonly race: CharacterRace,
              private readonly gender: CharacterGender,
              private readonly specialization: CharacterSpecialization,
              private readonly basicStats: CharacterStats) {
  }

  getHealth(): number {
    return this.health;
  }

  getMana(): number {
    return this.mana;
  }

  getRace(): CharacterRace {
    return this.race;
  }

  getGender(): CharacterGender {
    return this.gender;
  }

  getSpecialization(): CharacterSpecialization {
    return this.specialization;
  }

  getBasicStats(): CharacterStats {
    return this.basicStats;
  }

}
