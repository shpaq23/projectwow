import { LPCLook } from 'src/app/LPC/LPCLook';
import { CharacterEquipment } from 'src/app/pw/infrastructure/character/CharacterEquipment';
import { CharacterGender } from 'src/app/pw/infrastructure/character/CharacterGender';
import { CharacterLook } from 'src/app/pw/infrastructure/character/CharacterLook';
import { CharacterRace } from 'src/app/pw/infrastructure/character/CharacterRace';
import { CharacterSpecialization } from 'src/app/pw/infrastructure/character/CharacterSpecialization';
import { CharacterStats } from 'src/app/pw/infrastructure/character/CharacterStats';
import { CharacterLPCConverter } from 'src/app/pw/infrastructure/character/utils/CharacterLPCConverter';

export class Character {

  constructor(private readonly health: number,
              private readonly mana: number,
              private readonly race: CharacterRace,
              private readonly gender: CharacterGender,
              private readonly look: CharacterLook,
              private readonly specialization: CharacterSpecialization,
              private readonly basicStats: CharacterStats,
              private readonly equipment: CharacterEquipment) {
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

  getEquipment(): CharacterEquipment {
    return this.equipment;
  }

  getLook(): CharacterLook {
    return this.look;
  }

  getLPCLook(): LPCLook {
    return CharacterLPCConverter.fromCharacter(this);
  }

}
