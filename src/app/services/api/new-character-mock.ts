import { NewCharacterRace } from './character.service';
import {
  CharacterRaceClassEnum,
  CharacterRaceEnum,
  CharacterRaceFactionEnum,
  CharacterRaceGenderEnum
} from '../../pw/character/character.enums';
import { WowAbilityType } from '../../ui/tooltip/wow-ability-tooltip/wow-ability-tooltip.component';
import { WowSimpleIcon } from '../../ui/icons/wow-icon/wow-icon.component';

const warriorIcon: WowSimpleIcon = { name: CharacterRaceClassEnum.WARRIOR, icon: 'warrior' };
const rogueIcon: WowSimpleIcon = { name: CharacterRaceClassEnum.ROGUE, icon: 'rogue' };
const priestIcon: WowSimpleIcon = { name: CharacterRaceClassEnum.PRIEST, icon: 'priest' };
const mageIcon: WowSimpleIcon = { name: CharacterRaceClassEnum.MAGE, icon: 'mage' };
const hunterIcon: WowSimpleIcon = { name: CharacterRaceClassEnum.HUNTER, icon: 'hunter' };
const warlockIcon: WowSimpleIcon = { name: CharacterRaceClassEnum.WARLOCK, icon: 'warlock' };
const shamanIcon: WowSimpleIcon = { name: CharacterRaceClassEnum.SHAMAN, icon: 'shaman' };
const paladinIcon: WowSimpleIcon = { name: CharacterRaceClassEnum.PALADIN, icon: 'paladin' };
const druidIcon: WowSimpleIcon = { name: CharacterRaceClassEnum.DRUID, icon: 'druid' };
const hordeIcon: WowSimpleIcon = { name: CharacterRaceFactionEnum.HORDE, icon: 'horde' };
const allianceIcon: WowSimpleIcon = { name: CharacterRaceFactionEnum.ALLIANCE, icon: 'alliance' };
const maleIcon: WowSimpleIcon = { name: CharacterRaceGenderEnum.MALE, icon: 'male' };
const femaleIcon: WowSimpleIcon = { name: CharacterRaceGenderEnum.FEMALE, icon: 'female' };
// tslint:disable-next-line:max-line-length
const description = 'Demesne far hearted suppose venture excited see had has. Dependent on so extremely delivered by. Yet ﻿no jokes worse her why. Bed one supposing breakfast day fulfilled off depending questions. Whatever boy her exertion his extended.';

export const newCharacterMockResponse: NewCharacterRace[] = [
  {
    race: { name: CharacterRaceEnum.HUMAN, icon: 'humanmale' },
    availableClasses: [ warriorIcon, rogueIcon, priestIcon, mageIcon, paladinIcon ],
    faction: allianceIcon,
    gender: maleIcon,
    racialAbilities: [
      { name: 'Diplomancy', icon: 'diplomancy', description, type: WowAbilityType.PASSIVE },
      { name: 'Mace Specialization', icon: 'macespecialization', description, type: WowAbilityType.PASSIVE },
      { name: 'Perception', icon: 'perception', description, type: WowAbilityType.PASSIVE },
      { name: 'Sword Specialization', icon: 'swordspecialization', description, type: WowAbilityType.PASSIVE },
      { name: 'The Human Spirit', icon: 'thehumanspirit', description, type: WowAbilityType.PASSIVE }
    ]
  },
  {
    race: { name: CharacterRaceEnum.HUMAN, icon: 'humanfemale' },
    availableClasses: [ warriorIcon, rogueIcon, priestIcon, mageIcon, paladinIcon ],
    faction: allianceIcon,
    gender: femaleIcon,
    racialAbilities: [
      { name: 'Diplomancy', icon: 'diplomancy', description, type: WowAbilityType.PASSIVE },
      { name: 'Mace Specialization', icon: 'macespecialization', description, type: WowAbilityType.PASSIVE },
      { name: 'Perception', icon: 'perception', description, type: WowAbilityType.PASSIVE },
      { name: 'Sword Specialization', icon: 'swordspecialization', description, type: WowAbilityType.PASSIVE },
      { name: 'The Human Spirit', icon: 'thehumanspirit', description, type: WowAbilityType.PASSIVE }
    ]
  },
  {
    race: { name: CharacterRaceEnum.DWARF, icon: 'dwarfmale' },
    availableClasses: [ warriorIcon, rogueIcon, priestIcon, hunterIcon, paladinIcon ],
    faction: allianceIcon,
    gender: maleIcon,
    racialAbilities: [
      { name: 'Find Treasure', icon: 'findtreasure', description, type: WowAbilityType.PASSIVE },
      { name: 'Frost Resistance', icon: 'frostresistance', description, type: WowAbilityType.PASSIVE },
      { name: 'Gun Specialization', icon: 'gunspecialization', description, type: WowAbilityType.PASSIVE }
    ]
  },
  {
    race: { name: CharacterRaceEnum.DWARF, icon: 'dwarffemale' },
    availableClasses: [ warriorIcon, rogueIcon, priestIcon, hunterIcon, paladinIcon ],
    faction: allianceIcon,
    gender: femaleIcon,
    racialAbilities: [
      { name: 'Find Treasure', icon: 'findtreasure', description, type: WowAbilityType.PASSIVE },
      { name: 'Frost Resistance', icon: 'frostresistance', description, type: WowAbilityType.PASSIVE },
      { name: 'Gun Specialization', icon: 'gunspecialization', description, type: WowAbilityType.PASSIVE }
    ]
  },
  {
    race: { name: CharacterRaceEnum.NIGHTELF, icon: 'nightelfmale' },
    availableClasses: [ warriorIcon, rogueIcon, priestIcon, hunterIcon, druidIcon ],
    faction: allianceIcon,
    gender: maleIcon,
    racialAbilities: [
      { name: 'Nature Resistance', icon: 'natureresistance', description, type: WowAbilityType.PASSIVE },
      { name: 'Wisp Spirit', icon: 'wispspirit', description, type: WowAbilityType.PASSIVE },
      { name: 'Quickness', icon: 'quickness', description, type: WowAbilityType.PASSIVE },
      { name: 'Shadowmeld', icon: 'shadowmeld', description, type: WowAbilityType.PASSIVE}
    ]
  },
  {
    race: { name: CharacterRaceEnum.NIGHTELF, icon: 'nightelffemale' },
    availableClasses: [ warriorIcon, rogueIcon, priestIcon, hunterIcon, druidIcon ],
    faction: allianceIcon,
    gender: femaleIcon,
    racialAbilities: [
      { name: 'Nature Resistance', icon: 'natureresistance', description, type: WowAbilityType.PASSIVE },
      { name: 'Wisp Spirit', icon: 'wispspirit', description, type: WowAbilityType.PASSIVE },
      { name: 'Quickness', icon: 'quickness', description, type: WowAbilityType.PASSIVE },
      { name: 'Shadowmeld', icon: 'shadowmeld', description, type: WowAbilityType.PASSIVE }
    ]
  },
  { race: { name: CharacterRaceEnum.GNOME, icon: 'gnomemale' },
    availableClasses: [ warriorIcon, rogueIcon, mageIcon, warlockIcon ],
    faction: allianceIcon,
    gender: maleIcon,
    racialAbilities: [
      { name: 'Arcane Resistance', icon: 'arcaneresistance', description, type: WowAbilityType.PASSIVE },
      { name: 'Expansive Mind', icon: 'expansivemind', description, type: WowAbilityType.PASSIVE },
      { name: 'Engineering Specialization', icon: 'engineeringspecialization', description, type: WowAbilityType.PASSIVE },
      { name: 'Escape Artist', icon: 'escapeartist', description, type: WowAbilityType.PASSIVE }
    ]
  },
  { race: { name: CharacterRaceEnum.GNOME, icon: 'gnomefemale' },
    availableClasses: [ warriorIcon, rogueIcon, mageIcon, warlockIcon ],
    faction: allianceIcon,
    gender: femaleIcon,
    racialAbilities: [
      { name: 'Arcane Resistance', icon: 'arcaneresistance', description, type: WowAbilityType.PASSIVE },
      { name: 'Expansive Mind', icon: 'expansivemind', description, type: WowAbilityType.PASSIVE },
      { name: 'Engineering Specialization', icon: 'engineeringspecialization', description, type: WowAbilityType.PASSIVE },
      { name: 'Escape Artist', icon: 'escapeartist', description, type: WowAbilityType.PASSIVE }
    ]
  },

  {
    race: { name: CharacterRaceEnum.ORC, icon: 'orcmale' },
    availableClasses: [ warriorIcon, rogueIcon, hunterIcon, warlockIcon, shamanIcon ],
    faction: hordeIcon,
    gender: maleIcon,
    racialAbilities: [
      { name: 'Axe Specialization', icon: 'axespecialization', description, type: WowAbilityType.PASSIVE },
      { name: 'Blood Fury', icon: 'bloodfury', description, type: WowAbilityType.PASSIVE },
      { name: 'Command', icon: 'command', description, type: WowAbilityType.PASSIVE },
      { name: 'Hardiness', icon: 'hardiness', description, type: WowAbilityType.PASSIVE }
    ]
  },
  {
    race: { name: CharacterRaceEnum.ORC, icon: 'orcfemale' },
    availableClasses: [ warriorIcon, rogueIcon, hunterIcon, warlockIcon, shamanIcon ],
    faction: hordeIcon,
    gender: femaleIcon,
    racialAbilities: [
      { name: 'Axe Specialization', icon: 'axespecialization', description, type: WowAbilityType.PASSIVE },
      { name: 'Blood Fury', icon: 'bloodfury', description, type: WowAbilityType.PASSIVE },
      { name: 'Command', icon: 'command', description, type: WowAbilityType.PASSIVE },
      { name: 'Hardiness', icon: 'hardiness', description, type: WowAbilityType.PASSIVE }
    ]
  },
  {
    race: { name: CharacterRaceEnum.UNDEAD, icon: 'undeadmale' },
    availableClasses: [ warriorIcon, rogueIcon, priestIcon, mageIcon, warlockIcon ],
    faction: hordeIcon,
    gender: maleIcon,
    racialAbilities: [
      { name: 'Cannibalize', icon: 'cannibalize', description, type: WowAbilityType.PASSIVE },
      { name: 'Shadow Resistance', icon: 'shadowresistance', description, type: WowAbilityType.PASSIVE },
      { name: 'Underwater Breathing', icon: 'underwaterbreathing', description, type: WowAbilityType.PASSIVE },
      { name: 'Will of the Forsaken', icon: 'willoftheforsaken', description, type: WowAbilityType.PASSIVE }
    ]
  },
  {
    race: { name: CharacterRaceEnum.UNDEAD, icon: 'undeadfemale' },
    availableClasses: [ warriorIcon, rogueIcon, priestIcon, mageIcon, warlockIcon ],
    faction: hordeIcon,
    gender: femaleIcon,
    racialAbilities: [
      { name: 'Cannibalize', icon: 'cannibalize', description, type: WowAbilityType.PASSIVE },
      { name: 'Shadow Resistance', icon: 'shadowresistance', description, type: WowAbilityType.PASSIVE },
      { name: 'Underwater Breathing', icon: 'underwaterbreathing', description, type: WowAbilityType.PASSIVE },
      { name: 'Will of the Forsaken', icon: 'willoftheforsaken', description, type: WowAbilityType.PASSIVE }
    ]
  },
  {
    race: { name: CharacterRaceEnum.TAUREN, icon: 'taurenmale' },
    availableClasses: [ warlockIcon, hunterIcon, shamanIcon, druidIcon ],
    faction: hordeIcon,
    gender: maleIcon,
    racialAbilities: [
      { name: 'Cultivation', icon: 'cultivation', description, type: WowAbilityType.PASSIVE },
      { name: 'Endurance', icon: 'endurance', description, type: WowAbilityType.PASSIVE },
      { name: 'Nature Resistance', icon: 'natureresistance', description, type: WowAbilityType.PASSIVE },
      { name: 'War Stomp', icon: 'warstomp', description, type: WowAbilityType.PASSIVE }
    ]
  },
  {
    race: { name: CharacterRaceEnum.TAUREN, icon: 'taurenfemale' },
    availableClasses: [ warlockIcon, hunterIcon, shamanIcon, druidIcon ],
    faction: hordeIcon,
    gender: femaleIcon,
    racialAbilities: [
      { name: 'Cultivation', icon: 'cultivation', description, type: WowAbilityType.PASSIVE },
      { name: 'Endurance', icon: 'endurance', description, type: WowAbilityType.PASSIVE },
      { name: 'Nature Resistance', icon: 'natureresistance', description, type: WowAbilityType.PASSIVE },
      { name: 'War Stomp', icon: 'warstomp', description, type: WowAbilityType.PASSIVE }
    ]
  },
  {
    race: { name: CharacterRaceEnum.TROLL, icon: 'trollmale' },
    availableClasses: [ warriorIcon, rogueIcon, priestIcon, mageIcon, hunterIcon, shamanIcon ],
    faction: hordeIcon,
    gender: maleIcon,
    racialAbilities: [
      { name: 'Beast Slaying', icon: 'beastslaying', description, type: WowAbilityType.PASSIVE },
      { name: 'Berserking', icon: 'berserking', description, type: WowAbilityType.PASSIVE },
      { name: 'Bow Specialization', icon: 'bowspecialization', description, type: WowAbilityType.PASSIVE },
      { name: 'Regeneration', icon: 'regeneration', description, type: WowAbilityType.PASSIVE },
      { name: 'Throwing Specialization', icon: 'throwingspecialization', description, type: WowAbilityType.PASSIVE }
    ]
  },
  {
    race: { name: CharacterRaceEnum.TROLL, icon: 'trollfemale' },
    availableClasses: [ warriorIcon, rogueIcon, priestIcon, mageIcon, hunterIcon, shamanIcon ],
    faction: hordeIcon,
    gender: femaleIcon,
    racialAbilities: [
      { name: 'Beast Slaying', icon: 'beastslaying', description, type: WowAbilityType.PASSIVE },
      { name: 'Berserking', icon: 'berserking', description, type: WowAbilityType.PASSIVE },
      { name: 'Bow Specialization', icon: 'bowspecialization', description, type: WowAbilityType.PASSIVE },
      { name: 'Regeneration', icon: 'regeneration', description, type: WowAbilityType.PASSIVE },
      { name: 'Throwing Specialization', icon: 'throwingspecialization', description, type: WowAbilityType.PASSIVE }
    ]
  },
];

