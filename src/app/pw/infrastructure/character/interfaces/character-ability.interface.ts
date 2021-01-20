import { CharacterAbilityTypeEnum } from 'src/app/pw/infrastructure/character/enums/character-ability-type.enum';

export interface CharacterAbilityInterface {
  name: string;
  description: string;
  type: CharacterAbilityTypeEnum;
}
