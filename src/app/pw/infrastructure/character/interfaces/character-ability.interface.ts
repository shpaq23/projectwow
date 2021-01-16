import { CharacterAbilityTypeEnum } from 'src/app/pw/infrastructure/character/enumes/character-ability-type.enum';

export interface CharacterAbilityInterface {
  name: string;
  description: string;
  type: CharacterAbilityTypeEnum;
}
