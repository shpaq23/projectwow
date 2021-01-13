import { CharacterBasicStats } from 'src/app/pw/infrastructure/character/character-basic-stats';
import { CharacterGender } from 'src/app/pw/infrastructure/character/character-gender.enum';
import { CharacterRace } from 'src/app/pw/infrastructure/character/character-race.enum';
import { CharacterSpecialization } from 'src/app/pw/infrastructure/character/character-specialization.enum';
import { GenericIconType } from 'src/app/pw/infrastructure/icon/GenericIconType';

export class Character {

  constructor(private readonly health: number,
              private readonly mana: number,
              private readonly race: GenericIconType<CharacterRace>,
              private readonly gender: GenericIconType<CharacterGender>,
              private readonly specialization: GenericIconType<CharacterSpecialization>,
              private readonly basicStats: CharacterBasicStats) {
  }

  getHealth(): number {
    return this.health;
  }

  getMana(): number {
    return this.mana;
  }

  getRace(): GenericIconType<CharacterRace> {
    return this.race;
  }

  getGender(): GenericIconType<CharacterGender> {
    return this.gender;
  }

  getSpecialization(): GenericIconType<CharacterSpecialization> {
    return this.specialization;
  }

  getBasicStats(): CharacterBasicStats {
    return this.basicStats;
  }

}
