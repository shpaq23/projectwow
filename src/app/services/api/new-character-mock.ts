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
      CharacterRaceClassEnum.ROGUE,
      CharacterRaceClassEnum.PRIEST,
      CharacterRaceClassEnum.MAGE,
      CharacterRaceClassEnum.PALADIN,
    ],
    faction: CharacterRaceFactionEnum.ALLIANCE,
    gender: CharacterRaceGenderEnum.MALE
  },
  {
    race: CharacterRaceEnum.HUMAN,
    availableClasses: [
      CharacterRaceClassEnum.WARRIOR,
      CharacterRaceClassEnum.ROGUE,
      CharacterRaceClassEnum.PRIEST,
      CharacterRaceClassEnum.MAGE,
      CharacterRaceClassEnum.PALADIN,
    ],
    faction: CharacterRaceFactionEnum.ALLIANCE,
    gender: CharacterRaceGenderEnum.FEMALE
  },
  {
    race: CharacterRaceEnum.DWARF,
    availableClasses: [
      CharacterRaceClassEnum.WARRIOR,
      CharacterRaceClassEnum.ROGUE,
      CharacterRaceClassEnum.PRIEST,
      CharacterRaceClassEnum.HUNTER,
      CharacterRaceClassEnum.PALADIN
    ],
    faction: CharacterRaceFactionEnum.ALLIANCE,
    gender: CharacterRaceGenderEnum.MALE,
  },
  {
    race: CharacterRaceEnum.DWARF,
    availableClasses: [
      CharacterRaceClassEnum.WARRIOR,
      CharacterRaceClassEnum.ROGUE,
      CharacterRaceClassEnum.PRIEST,
      CharacterRaceClassEnum.HUNTER,
      CharacterRaceClassEnum.PALADIN
    ],
    faction: CharacterRaceFactionEnum.ALLIANCE,
    gender: CharacterRaceGenderEnum.FEMALE,
  },
  {
    race: CharacterRaceEnum.NIGHTELF,
    availableClasses: [
      CharacterRaceClassEnum.WARRIOR,
      CharacterRaceClassEnum.ROGUE,
      CharacterRaceClassEnum.PRIEST,
      CharacterRaceClassEnum.HUNTER,
      CharacterRaceClassEnum.DRUID
    ],
    faction: CharacterRaceFactionEnum.ALLIANCE,
    gender: CharacterRaceGenderEnum.MALE
  },
  {
    race: CharacterRaceEnum.NIGHTELF,
    availableClasses: [
      CharacterRaceClassEnum.WARRIOR,
      CharacterRaceClassEnum.ROGUE,
      CharacterRaceClassEnum.PRIEST,
      CharacterRaceClassEnum.HUNTER,
      CharacterRaceClassEnum.DRUID
    ],
    faction: CharacterRaceFactionEnum.ALLIANCE,
    gender: CharacterRaceGenderEnum.FEMALE
  },
  { race: CharacterRaceEnum.GNOME,
    availableClasses: [
      CharacterRaceClassEnum.WARRIOR,
      CharacterRaceClassEnum.ROGUE,
      CharacterRaceClassEnum.MAGE,
      CharacterRaceClassEnum.WARLOCK
    ],
    faction: CharacterRaceFactionEnum.ALLIANCE,
    gender: CharacterRaceGenderEnum.MALE
  },
  { race: CharacterRaceEnum.GNOME,
    availableClasses: [
      CharacterRaceClassEnum.WARRIOR,
      CharacterRaceClassEnum.ROGUE,
      CharacterRaceClassEnum.MAGE,
      CharacterRaceClassEnum.WARLOCK
    ],
    faction: CharacterRaceFactionEnum.ALLIANCE,
    gender: CharacterRaceGenderEnum.FEMALE
  },

  { race: CharacterRaceEnum.ORC,
    availableClasses: [
      CharacterRaceClassEnum.WARRIOR,
      CharacterRaceClassEnum.ROGUE,
      CharacterRaceClassEnum.HUNTER,
      CharacterRaceClassEnum.WARLOCK,
      CharacterRaceClassEnum.SHAMAN
    ],
    faction: CharacterRaceFactionEnum.HORDE,
    gender: CharacterRaceGenderEnum.MALE
  },
  { race: CharacterRaceEnum.ORC,
    availableClasses: [
      CharacterRaceClassEnum.WARRIOR,
      CharacterRaceClassEnum.ROGUE,
      CharacterRaceClassEnum.HUNTER,
      CharacterRaceClassEnum.WARLOCK,
      CharacterRaceClassEnum.SHAMAN
    ],
    faction: CharacterRaceFactionEnum.HORDE,
    gender: CharacterRaceGenderEnum.FEMALE
  },
  { race: CharacterRaceEnum.UNDEAD,
    availableClasses: [
      CharacterRaceClassEnum.WARRIOR,
      CharacterRaceClassEnum.ROGUE,
      CharacterRaceClassEnum.PRIEST,
      CharacterRaceClassEnum.MAGE,
      CharacterRaceClassEnum.WARLOCK
    ],
    faction: CharacterRaceFactionEnum.HORDE,
    gender: CharacterRaceGenderEnum.MALE
  },
  { race: CharacterRaceEnum.UNDEAD,
    availableClasses: [
      CharacterRaceClassEnum.WARRIOR,
      CharacterRaceClassEnum.ROGUE,
      CharacterRaceClassEnum.PRIEST,
      CharacterRaceClassEnum.MAGE,
      CharacterRaceClassEnum.WARLOCK
    ],
    faction: CharacterRaceFactionEnum.HORDE,
    gender: CharacterRaceGenderEnum.FEMALE
  },
  { race: CharacterRaceEnum.TAUREN,
    availableClasses: [
      CharacterRaceClassEnum.WARRIOR,
      CharacterRaceClassEnum.HUNTER,
      CharacterRaceClassEnum.SHAMAN,
      CharacterRaceClassEnum.DRUID
    ],
    faction: CharacterRaceFactionEnum.HORDE,
    gender: CharacterRaceGenderEnum.MALE
  },
  { race: CharacterRaceEnum.TAUREN,
    availableClasses: [
      CharacterRaceClassEnum.WARRIOR,
      CharacterRaceClassEnum.HUNTER,
      CharacterRaceClassEnum.SHAMAN,
      CharacterRaceClassEnum.DRUID
    ],
    faction: CharacterRaceFactionEnum.HORDE,
    gender: CharacterRaceGenderEnum.FEMALE
  },
  { race: CharacterRaceEnum.TROLL,
    availableClasses: [
      CharacterRaceClassEnum.WARRIOR,
      CharacterRaceClassEnum.ROGUE,
      CharacterRaceClassEnum.PRIEST,
      CharacterRaceClassEnum.MAGE,
      CharacterRaceClassEnum.HUNTER,
      CharacterRaceClassEnum.SHAMAN
    ],
    faction: CharacterRaceFactionEnum.HORDE,
    gender: CharacterRaceGenderEnum.MALE
  },
  { race: CharacterRaceEnum.TROLL,
    availableClasses: [
      CharacterRaceClassEnum.WARRIOR,
      CharacterRaceClassEnum.ROGUE,
      CharacterRaceClassEnum.PRIEST,
      CharacterRaceClassEnum.MAGE,
      CharacterRaceClassEnum.HUNTER,
      CharacterRaceClassEnum.SHAMAN
    ],
    faction: CharacterRaceFactionEnum.HORDE,
    gender: CharacterRaceGenderEnum.FEMALE
  }
];
