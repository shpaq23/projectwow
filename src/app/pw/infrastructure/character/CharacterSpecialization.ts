import { CharacterSpecializationEnum } from 'src/app/pw/infrastructure/character/enumes/character-specialization.enum';
import { GenericIconType } from 'src/app/pw/infrastructure/icon/GenericIconType';

export class CharacterSpecialization extends GenericIconType<CharacterSpecializationEnum> {
  constructor(public readonly data: CharacterSpecializationEnum,
              public readonly url: string) {
    super();
  }
}
