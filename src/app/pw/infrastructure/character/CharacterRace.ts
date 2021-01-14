import { CharacterRaceEnum } from 'src/app/pw/infrastructure/character/enumes/character-race.enum';
import { GenericIconType } from 'src/app/pw/infrastructure/icon/GenericIconType';

export class CharacterRace extends GenericIconType<CharacterRaceEnum> {
  constructor(public readonly data: CharacterRaceEnum,
              public readonly url: string) {
    super();
  }
}
