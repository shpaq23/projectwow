import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { concatMap, map, take } from 'rxjs/operators';
import { CharacterActionsTypes, GetCharacter } from 'src/app/store/actions/character.action';
import { getIsNewCharacter } from 'src/app/store/selectors/character.selector';
import { CharacterState } from 'src/app/store/state/character.state';

export abstract class CanActivateCharacterGuard implements CanActivate {

  private isNewCharacter: boolean;

  protected constructor(protected characterStore: Store<CharacterState>,
                        protected router: Router,
                        protected actions$: Actions) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | UrlTree | boolean {
    this.setIsNewCharacter();
    if (this.isNewCharacter !== null) {
      return this.resolveCanActivate(this.isNewCharacter);
    } else {
      this.characterStore.dispatch(new GetCharacter());
      return this.actions$
        .pipe(
          take(1),
          ofType(CharacterActionsTypes.GetCharacterFail, CharacterActionsTypes.GetCharacterSuccess),
          concatMap(() => this.getIsNewCharacter$()),
          map((isNewCharacter: boolean) => this.resolveCanActivate(isNewCharacter))
        );
    }
  }

  abstract resolveCanActivate(isNewCharacter: boolean): boolean | UrlTree;

  private setIsNewCharacter(): void {
    this.getIsNewCharacter$().subscribe(value => this.isNewCharacter = value);
  }

  private getIsNewCharacter$(): Observable<boolean> {
    return this.characterStore.select(getIsNewCharacter).pipe(take(1));
  }
}
