import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Actions, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { concatMap, map, take } from 'rxjs/operators';
import { getCharacterFailure, getCharacterSuccess } from 'src/app/store/actions/character.action';
import { CharacterCommands } from 'src/app/store/commands/character.commands';
import { CharacterRepository } from 'src/app/store/repositories/character.repository';

export abstract class CanActivateCharacterGuard implements CanActivate {

  private isNewCharacter: boolean;

  protected constructor(protected readonly characterCommandsService: CharacterCommands,
                        protected readonly characterRepository: CharacterRepository,
                        protected readonly router: Router,
                        protected readonly actions$: Actions) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | UrlTree | boolean {
    this.setIsNewCharacter();
    if (this.isNewCharacter !== null) {
      return this.resolveCanActivate(this.isNewCharacter);
    } else {
      this.characterCommandsService.getCharacter();
      return this.actions$
        .pipe(
          take(1),
          ofType(getCharacterFailure, getCharacterSuccess),
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
    return this.characterRepository.selectIsNewCharacter().pipe(take(1));
  }
}
