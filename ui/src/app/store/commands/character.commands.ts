import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { CreateCharacterDto } from 'src/app/api/dtos/character/create-character.dto';
import { createCharacter, getCharacter, setNewCharacter } from 'src/app/store/actions/character.action';
import { CharacterState } from 'src/app/store/state/character.state';

@Injectable({
  providedIn: 'root'
})
export class CharacterCommands {

  constructor(private readonly characterStore$: Store<CharacterState>) {
  }

  getCharacter(): void {
    this.characterStore$.dispatch(getCharacter());
  }

  setNewCharacter(isNewCharacter: boolean): void {
    this.characterStore$.dispatch(setNewCharacter({ payload: isNewCharacter }));
  }

  createCharacter(characterDTO: CreateCharacterDto): void {
    this.characterStore$.dispatch(createCharacter({ payload: characterDTO }));
  }

}
