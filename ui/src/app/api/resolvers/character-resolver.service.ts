import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { take } from 'rxjs/operators';
import { CharacterCommands } from 'src/app/store/commands/character.commands';
import { GlobalLoaderCommands } from 'src/app/store/commands/global-loader.commands';
import { CharacterRepository } from 'src/app/store/repositories/character.repository';

@Injectable({
  providedIn: 'root'
})
export class CharacterResolver implements Resolve<boolean> {

  private characterFetched: boolean;

  constructor(private readonly characterCommands: CharacterCommands,
              private readonly characterRepository: CharacterRepository,
              private readonly globalLoaderCommands: GlobalLoaderCommands) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    this.setCharacterFetched();
    if (!this.characterFetched) {
      this.globalLoaderCommands.startLoader();
      this.characterCommands.getCharacter();
    }
    return of(true);
  }

  private setCharacterFetched(): void {
    this.characterRepository.selectCharacter().pipe(take(1)).subscribe(character => this.characterFetched = !!character);
  }
}
