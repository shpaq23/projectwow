import { CharacterLook } from './character-look';

export class Character {

  private readonly look: CharacterLook;

  constructor(look: CharacterLook) {
    this.look = look;
  }

  getLook(): CharacterLook {
    return this.look;
  }

}
