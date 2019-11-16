import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { newCharacterMockResponse } from './new-character-mock';
import { WowAbility } from '../../ui/tooltip/wow-ability-tooltip/wow-ability-tooltip.component';
import { WowSimpleIcon } from '../../ui/icons/wow-icon/wow-icon.component';

export interface Character {
  nickname: string;
  level: number;
  copper: number;
}

export interface NewCharacterRace {
  race: WowSimpleIcon;
  gender: WowSimpleIcon;
  availableClasses: WowSimpleIcon[];
  faction: WowSimpleIcon;
  racialAbilities: WowAbility[];
}

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  url = environment.apiUrl + '/character';
  delay = 1;

  constructor(private httpClient: HttpClient) {
  }

  getCharacter(): Observable<Character | NewCharacterRace[]> {
    // return of({nickname: 'Shpaq', level: 1, copper: 0}).pipe(delay(this.delay));
    return of(newCharacterMockResponse).pipe(delay(this.delay));
  }
}
