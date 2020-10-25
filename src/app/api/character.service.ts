import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { CreateCharacterDto } from 'src/app/api/dtos/character/create-character.dto';
import { environment } from '../../environments/environment';
import { Character } from '../pw/infrastructure/character/Character';
import { Ears } from '../pw/infrastructure/character/enums/ears.enum';
import { Eyes } from '../pw/infrastructure/character/enums/eyes.enum';
import { HairColor } from '../pw/infrastructure/character/enums/hair-color.enum';
import { Legs } from '../pw/infrastructure/character/enums/legs.enum';
import { MaleHair } from '../pw/infrastructure/character/enums/male-hair.enum';
import { Nose } from '../pw/infrastructure/character/enums/nose.enum';
import { Sex } from '../pw/infrastructure/character/enums/sex.enum';
import { Shoes } from '../pw/infrastructure/character/enums/shoes.enum';
import { Skin } from '../pw/infrastructure/character/enums/skin.enum';
import { Torso } from '../pw/infrastructure/character/enums/torso.enum';
import { Weapon } from '../pw/infrastructure/character/enums/weapon.enum';
import { CharacterDto } from './dtos/character/character.dto';


@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private url = environment.apiUrl + '/character';
  private delay = 500;

  constructor(private httpClient: HttpClient) {

  }

  isNewCharacter(): Observable<boolean> {
    return of(true).pipe(delay(this.delay));
  }

  getCharacter(): Observable<Character> {
    // if (this.afterNewCharacterCreate) {
    //   return of(fakeCharacterResponse).pipe(delay(this.delay));
    // } else {
    //   return of(true).pipe(delay(this.delay));
    // }
    return of(fakeCharacterResponse).pipe(
      delay(this.delay),
      map(response => new Character(response.look))
    );
  }

  createNewCharacter(createCharacterDto: CreateCharacterDto): Observable<Character> {
    return of(fakeCharacterResponse).pipe(
      delay(this.delay),
      map((response => new Character(response.look)))
    );
    // return timer(this.delay).pipe(mergeMap(() => throwError({ message: 'Nickname already used' })));
  }

}

const fakeCharacterResponse: CharacterDto = {
  look: {
    ears: Ears.DEFAULT,
    eyes: Eyes.DEFAULT,
    nose: Nose.DEFAULT,
    sex: Sex.MALE,
    skin: Skin.TANNED,
    hair: MaleHair.DEFAULT,
    hairColor: HairColor.BLONDE,
    torso: Torso.DEFAULT,
    legs: Legs.DEFAULT,
    shoes: Shoes.DEFAULT,
    weapon: Weapon.DAGGER
  }
};
