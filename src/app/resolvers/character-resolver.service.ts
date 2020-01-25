import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { CharacterState } from '../store/state/character.state';
import { Actions, ofType } from '@ngrx/effects';
import { CharacterActionsTypes, GetCharacter } from '../store/actions/character.action';
import { take } from 'rxjs/operators';
import { getCharacterLoaded } from '../store/selectors/character.selector';
import { GlobalLoaderState } from '../store/state/global-loader.state';
import { StartLoading } from '../store/actions/global-loader.action';

@Injectable({
  providedIn: 'root'
})
export class CharacterResolver implements Resolve<Actions | boolean> {

  private characterLoaded: boolean;

  constructor(private characterStore: Store<CharacterState>,
              private globalLoaderStore: Store<GlobalLoaderState>,
              private actions$: Actions) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Actions | boolean> {
    this.characterStore.select(getCharacterLoaded).pipe(take(1)).subscribe(loaded => this.characterLoaded = loaded);
    if (this.characterLoaded) {
      return of(true);
    } else {
      this.globalLoaderStore.dispatch(new StartLoading());
      this.characterStore.dispatch(new GetCharacter());
      return this.actions$.pipe(take(1), ofType(CharacterActionsTypes.GetNewCharacterSuccess, CharacterActionsTypes.GetCharacterSuccess));
    }
  }
}
