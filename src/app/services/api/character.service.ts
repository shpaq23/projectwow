import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import {
  CharacterRaceClassEnum,
  CharacterRaceEnum,
  CharacterRaceFactionEnum,
  CharacterRaceGenderEnum
} from '../../pw/character/character.enums';
import { newCharacterMockResponse } from './new-character-mock';

export interface Character {
  nickname: string;
  level: number;
  copper: number;
}

export interface NewCharacterRace {
  race: CharacterRaceEnum;
  gender: CharacterRaceGenderEnum;
  availableClasses: CharacterRaceClassEnum[];
  faction: CharacterRaceFactionEnum;
}



@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  url = environment.apiUrl + '/character';
  delay = 1500;

  constructor(private httpClient: HttpClient) {
  }

  getCharacter(): Observable<Character | NewCharacterRace[]> {
    return of({nickname: 'Shpaq', level: 1, copper: 0}).pipe(delay(this.delay));
    // return of(newCharacterMockResponse).pipe(delay(this.delay));
  }
}
