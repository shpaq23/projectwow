import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface Character {
  nickname: string;
  level: number;
  copper: number;
}

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  url = environment.apiUrl + '/character';
  delay = 500;

  constructor(private httpClient: HttpClient) {
  }

  getCharacter(): Observable<Character | boolean> {
    // return of({nickname: 'Shpaq', level: 1, copper: 0}).pipe(delay(this.delay));
    return of(true).pipe(delay(this.delay));
  }
}
