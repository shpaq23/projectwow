import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError, timer } from 'rxjs';
import { delay, mergeMap } from 'rxjs/operators';
import { Character } from '../../utils/character/Character';
import { CharacterResponse } from './structure-responses/character.response';
import { Ears } from '../../utils/character/enums/ears.enum';
import { Eyes } from '../../utils/character/enums/eyes.enum';
import { Nose } from '../../utils/character/enums/nose.enum';
import { Sex } from '../../utils/character/enums/sex.enum';
import { Skin } from '../../utils/character/enums/skin.enum';
import { MaleHair } from '../../utils/character/enums/male-hair.enum';
import { HairColor } from '../../utils/character/enums/hair-color.enum';
import { Torso } from '../../utils/character/enums/torso.enum';
import { Shoes } from '../../utils/character/enums/shoes.enum';
import { Legs } from '../../utils/character/enums/legs.enum';
import { Weapon } from '../../utils/character/enums/weapon.enum';
import { Actions, ofType } from '@ngrx/effects';
import { CharacterActionsTypes } from '../../store/actions/character.action';


@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private url = environment.apiUrl + '/character';
  private delay = 500;
  afterNewCharacterCreate = false;

  constructor(private httpClient: HttpClient) {

  }

  getCharacter(): Observable<CharacterResponse | boolean> {
    // if (this.afterNewCharacterCreate) {
    //   return of(fakeCharacterResponse).pipe(delay(this.delay));
    // } else {
    //   return of(true).pipe(delay(this.delay));
    // }
    return of(fakeCharacterResponse).pipe(delay(this.delay));
  }

  createNewCharacter(nickname: string): Observable<boolean> {
    return of(true).pipe(delay(this.delay));
    // return timer(this.delay).pipe(mergeMap(() => throwError('Nickname already used')));
  }

  createCharacterFromResponse(characterResponse: CharacterResponse): Character {
    return new Character(characterResponse.look);
  }

}

const fakeCharacterResponse: CharacterResponse = {
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
