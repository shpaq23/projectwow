import { Injectable } from '@angular/core';
import { Option } from 'src/app/generic-components/Option';
import { LPCFemaleHairEnum } from 'src/app/LPC/enums/female/LPC-female-hair.enum';
import { LPCEyesEnum } from 'src/app/LPC/enums/LPC-eyes.enum';
import { LPCHairColorEnum } from 'src/app/LPC/enums/LPC-hair-color.enum';
import { LPCRaceEnum } from 'src/app/LPC/enums/LPC-race.enum';
import { LPCMaleHairEnum } from 'src/app/LPC/enums/male/LPC-male-hair.enum';
import { LPCEyes, LPCHair, LPCHairColor, LPCRace } from 'src/app/LPC/types/LPC-types.type';
import { Character } from 'src/app/pw/infrastructure/character/Character';
import { CharacterGender } from 'src/app/pw/infrastructure/character/CharacterGender';
import { CharacterLook } from 'src/app/pw/infrastructure/character/CharacterLook';
import { CharacterRace } from 'src/app/pw/infrastructure/character/CharacterRace';
import { CharacterSpecialization } from 'src/app/pw/infrastructure/character/CharacterSpecialization';
import { CharacterStats } from 'src/app/pw/infrastructure/character/CharacterStats';
import { CharacterGenderEnum } from 'src/app/pw/infrastructure/character/enums/character-gender.enum';
import { CharacterRaceEnum } from 'src/app/pw/infrastructure/character/enums/character-race.enum';
import { CharacterSpecializationEnum } from 'src/app/pw/infrastructure/character/enums/character-specialization.enum';

@Injectable()
export class NewCharacterService {


  getGenderOptions(): Array<Option<CharacterGenderEnum>> {
    return [
      new Option<CharacterGenderEnum>(CharacterGenderEnum.MALE, 'Male'),
      new Option<CharacterGenderEnum>(CharacterGenderEnum.FEMALE, 'Female')
    ];
  }

  getRaceOptions(gender: CharacterGenderEnum): Array<Option<CharacterRaceEnum>> {
    const raceOptions: Array<Option<CharacterRaceEnum>> = [
      new Option<CharacterRaceEnum>(CharacterRaceEnum.HUMAN, 'Human'),
      new Option<CharacterRaceEnum>(CharacterRaceEnum.DARK_ELF, 'Dark Elf'),
      new Option<CharacterRaceEnum>(CharacterRaceEnum.ORC, 'Orc')
    ];
    if (gender === CharacterGenderEnum.MALE) {
      raceOptions.push(
        new Option<CharacterRaceEnum>(CharacterRaceEnum.SKELETON, 'Skeleton')
      );
    }
    return raceOptions;
  }

  getRaceLook(race: CharacterRaceEnum): Array<Option<LPCRace>> {
    switch (race) {
      case CharacterRaceEnum.DARK_ELF:
        return [
          new Option<LPCRace>(LPCRaceEnum.DARK_ELF, 'Dark'),
          new Option<LPCRace>(LPCRaceEnum.DARK_ELF2, 'Light'),
        ];
      case CharacterRaceEnum.HUMAN:
        return [
          new Option<LPCRace>(LPCRaceEnum.LIGHT, 'Light'),
          new Option<LPCRace>(LPCRaceEnum.DARK, 'Dark'),
          new Option<LPCRace>(LPCRaceEnum.DARK2, 'Darker'),
          new Option<LPCRace>(LPCRaceEnum.TANNED, 'Tanned'),
          new Option<LPCRace>(LPCRaceEnum.TANNED2, 'Asian'),
        ];
      case CharacterRaceEnum.ORC:
        return [
          new Option<LPCRace>(LPCRaceEnum.ORC, 'Light'),
          new Option<LPCRace>(LPCRaceEnum.RED_ORC, 'Dark')
        ];
    }
  }

  getHair(gender: CharacterGenderEnum): Array<Option<LPCHair>> {
    switch (gender) {
      case CharacterGenderEnum.MALE:
        return [
          new Option<LPCHair>(LPCMaleHairEnum.BED_HEAD, 'Bed Head'),
          new Option<LPCHair>(LPCMaleHairEnum.LONG, 'Long'),
          new Option<LPCHair>(LPCMaleHairEnum.LONG_HAWK, 'Long Hawk'),
          new Option<LPCHair>(LPCMaleHairEnum.MESSY, 'Messy'),
          new Option<LPCHair>(LPCMaleHairEnum.MOHAWK, 'Mohawk'),
          new Option<LPCHair>(LPCMaleHairEnum.PAGE, 'Page'),
          new Option<LPCHair>(LPCMaleHairEnum.PARTED, 'Parted'),
          new Option<LPCHair>(LPCMaleHairEnum.PLAIN, 'Plain')
        ];
      case CharacterGenderEnum.FEMALE:
        return [
          new Option<LPCHair>(LPCFemaleHairEnum.BANGS_LONG, 'Bangs Long'),
          new Option<LPCHair>(LPCFemaleHairEnum.BANGS_SHORT, 'Bangs Short'),
          new Option<LPCHair>(LPCFemaleHairEnum.LOOSE, 'Loose'),
          new Option<LPCHair>(LPCFemaleHairEnum.PIXIE, 'Pixie'),
          new Option<LPCHair>(LPCFemaleHairEnum.PONY_TAIL, 'Pony Tail'),
          new Option<LPCHair>(LPCFemaleHairEnum.PRINCESS, 'Princess'),
          new Option<LPCHair>(LPCFemaleHairEnum.SWOOP, 'Swoop'),
          new Option<LPCHair>(LPCFemaleHairEnum.UNKEMPT, 'Unkempt')
        ];
    }
  }

  getHairColor(): Array<Option<LPCHairColor>> {
    return [
      new Option<LPCHairColor>(LPCHairColorEnum.BLONDE, 'Blonde'),
      new Option<LPCHairColor>(LPCHairColorEnum.BLUE, 'Blue'),
      new Option<LPCHairColor>(LPCHairColorEnum.BRUNETTE, 'Brunette'),
      new Option<LPCHairColor>(LPCHairColorEnum.GREEN, 'Green'),
      new Option<LPCHairColor>(LPCHairColorEnum.PINK, 'Pink'),
      new Option<LPCHairColor>(LPCHairColorEnum.RAVEN, 'Raven'),
      new Option<LPCHairColor>(LPCHairColorEnum.REDHEAD, 'Redhead'),
      new Option<LPCHairColor>(LPCHairColorEnum.WHITE_BLOND, 'White Blonde'),
    ];
  }

  getEyes(): Array<Option<LPCEyesEnum>> {
    return [
      new Option<LPCEyesEnum>(LPCEyesEnum.BLUE, 'Blue'),
      new Option<LPCEyesEnum>(LPCEyesEnum.BROW, 'Brown'),
      new Option<LPCEyesEnum>(LPCEyesEnum.GRAY, 'Gray'),
      new Option<LPCEyesEnum>(LPCEyesEnum.GREEN, 'Green'),
      new Option<LPCEyesEnum>(LPCEyesEnum.ORANGE, 'Orange'),
      new Option<LPCEyesEnum>(LPCEyesEnum.PURPLE, 'Purple'),
      new Option<LPCEyesEnum>(LPCEyesEnum.RED, 'Red'),
      new Option<LPCEyesEnum>(LPCEyesEnum.YELLOW, 'Yellow')
    ];
  }

  createCharacter(gender: CharacterGenderEnum,
                  race: CharacterRaceEnum,
                  raceLook: LPCRace,
                  hair: LPCHair,
                  hairColor: LPCHairColor,
                  eyes: LPCEyes): Character {

    const characterRace = new CharacterRace(race, '');
    const characterGender = new CharacterGender(gender, '');
    const characterLook = new CharacterLook(raceLook, eyes, hair, hairColor);
    const characterSpecialization = new CharacterSpecialization(CharacterSpecializationEnum.INITIATIVE, '');
    const characterStats = new CharacterStats(20, 20, 20, 20, 20);
    // TODO: equipment
    return new Character(
      100,
      100,
      characterRace,
      characterGender,
      characterLook,
      characterSpecialization,
      characterStats,
      null
    );
  }
}
