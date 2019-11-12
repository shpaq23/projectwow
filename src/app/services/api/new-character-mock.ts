import { NewCharacterRace } from './character.service';
import {
  CharacterRaceClassEnum,
  CharacterRaceEnum,
  CharacterRaceFactionEnum,
  CharacterRaceGenderEnum
} from '../../pw/character/character.enums';

export const newCharacterMockResponse: NewCharacterRace[] = [
  {
    race: CharacterRaceEnum.HUMAN,
    availableClasses: [
      CharacterRaceClassEnum.WARRIOR,
      CharacterRaceClassEnum.MAGE,
      CharacterRaceClassEnum.MAGE,
      CharacterRaceClassEnum.PALADIN,
      CharacterRaceClassEnum.PRIEST
    ],
    faction: CharacterRaceFactionEnum.ALLIANCE,
    gender: CharacterRaceGenderEnum.MALE
  },
  {
    race: CharacterRaceEnum.HUMAN,
    availableClasses: [
      CharacterRaceClassEnum.WARRIOR,
      CharacterRaceClassEnum.MAGE,
      CharacterRaceClassEnum.MAGE,
      CharacterRaceClassEnum.PALADIN,
      CharacterRaceClassEnum.PRIEST
    ],
    faction: CharacterRaceFactionEnum.ALLIANCE,
    gender: CharacterRaceGenderEnum.FEMALE
  }
];
