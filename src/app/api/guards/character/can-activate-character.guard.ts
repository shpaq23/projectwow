import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { CharacterActionsTypes, GetNewCharacter, GetNewCharacterSuccess } from 'src/app/store/actions/character.action';
import { getNewCharacter } from 'src/app/store/selectors/character.selector';
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
      this.characterStore.dispatch(new GetNewCharacter());
      return this.actions$
        .pipe(
          take(1),
          ofType(CharacterActionsTypes.GetNewCharacterSuccess),
          map((action: GetNewCharacterSuccess) => this.resolveCanActivate(action.payload))
        );
    }
  }

  private setIsNewCharacter(): void {
    this.characterStore.select(getNewCharacter).pipe(take(1)).subscribe(value => this.isNewCharacter = value);
  }

  abstract resolveCanActivate(isNewCharacter: boolean): boolean | UrlTree;
}
