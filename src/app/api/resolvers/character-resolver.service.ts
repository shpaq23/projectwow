import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { take } from 'rxjs/operators';
import { GetCharacter } from 'src/app/store/actions/character.action';
import { StartLoading } from 'src/app/store/actions/global-loader.action';
import { getCharacter } from 'src/app/store/selectors/character.selector';
import { CharacterState } from 'src/app/store/state/character.state';
import { GlobalLoaderState } from 'src/app/store/state/global-loader.state';

@Injectable({
  providedIn: 'root'
})
export class CharacterResolver implements Resolve<boolean> {

  private characterFetched: boolean;

  constructor(private characterStore: Store<CharacterState>,
              private globalLoaderStore: Store<GlobalLoaderState>) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    this.setCharacterFetched();
    if (!this.characterFetched) {
      this.globalLoaderStore.dispatch(new StartLoading());
      this.characterStore.dispatch(new GetCharacter());
    }
    return of(true);
  }

  private setCharacterFetched(): void {
    this.characterStore.select(getCharacter).pipe(take(1)).subscribe(character => this.characterFetched = !!character);
  }
}
