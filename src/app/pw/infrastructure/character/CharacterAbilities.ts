import { CharacterAbilityInterface } from 'src/app/pw/infrastructure/character/interfaces/character-ability.interface';
import { GenericIconType } from 'src/app/pw/infrastructure/icon/GenericIconType';

export class CharacterAbilities extends GenericIconType<Array<CharacterAbilityInterface>> {
  constructor(public readonly data: Array<CharacterAbilityInterface>,
              public readonly url: string) {
    super();
  }
}
