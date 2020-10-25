import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { CharacterService } from 'src/app/api/character.service';
import {
  CharacterActionsTypes,
  CreateCharacterSuccess,
  GetCharacterSuccess,
  UpdateCharacter
} from 'src/app/store/actions/character.action';
import { CharacterState } from 'src/app/store/state/character.state';

const updateCharacterActions = [
  CharacterActionsTypes.GetCharacterSuccess,
  CharacterActionsTypes.CreateCharacterSuccess
];

type updateCharacterActionTypes = GetCharacterSuccess | CreateCharacterSuccess;

@Injectable()
export class CharacterUpdateEffect {

  @Effect()
  updateCharacter$ = this.actions$.pipe(
    ofType(...updateCharacterActions),
    map((action: updateCharacterActionTypes) => new UpdateCharacter(action.payload))
  );

  constructor(private characterService: CharacterService,
              private characterStore: Store<CharacterState>,
              private actions$: Actions) {
  }

}
