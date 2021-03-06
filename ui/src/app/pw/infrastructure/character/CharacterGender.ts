import { CharacterGenderEnum } from 'src/app/pw/infrastructure/character/enums/character-gender.enum';
import { GenericIconType } from 'src/app/pw/infrastructure/icon/GenericIconType';

export class CharacterGender extends GenericIconType<CharacterGenderEnum> {
  constructor(public readonly data: CharacterGenderEnum,
              public readonly url: string) {
    super();
  }

  getDisplayName(): string {
    return this.data.toLowerCase();
  }
}

