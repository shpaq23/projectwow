import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FailureDto } from 'src/app/api/dtos/failure.dto';
import { Character } from 'src/app/pw/infrastructure/character/Character';
import { getCharacter, getCharacterError, getIsNewCharacter } from 'src/app/store/selectors/character.selector';
import { CharacterState } from 'src/app/store/state/character.state';

@Injectable({
  providedIn: 'root'
})
export class CharacterRepository {

  constructor(private readonly characterStore$: Store<CharacterState>) {
  }

  selectIsNewCharacter(): Observable<boolean> {
    return this.characterStore$.select(getIsNewCharacter);
  }

  selectCharacter(): Observable<Character> {
    return this.characterStore$.select(getCharacter);
  }

  selectCharacterError(): Observable<FailureDto> {
    return this.characterStore$.select(getCharacterError);
  }

}
