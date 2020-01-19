import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Character } from '../../utils/character/Character';
import { CharacterResponse } from './structure-responses/character.response';
import { Ears } from '../../utils/character/enums/ears.enum';
import { Eyes } from '../../utils/character/enums/eyes.enum';
import { Nose } from '../../utils/character/enums/nose.enum';
import { Sex } from '../../utils/character/enums/sex.enum';
import { Skin } from '../../utils/character/enums/skin.enum';


@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  url = environment.apiUrl + '/character';
  delay = 500;

  constructor(private httpClient: HttpClient) {
  }

  getCharacter(): Observable<CharacterResponse | boolean> {
    // return of(fakeCharacterResponse).pipe(delay(this.delay));
    return of(true).pipe(delay(this.delay));
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
    skin: Skin.TANNED
  }
};
