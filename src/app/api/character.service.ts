import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { CreateCharacterDto } from 'src/app/api/dtos/character/create-character.dto';
import { environment } from 'src/environments/environment';
import { Character } from 'src/app/pw/infrastructure/character/Character';


@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private url = environment.apiUrl + '/character';
  private delay = 3500;

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
    return of(null).pipe(
      delay(this.delay),
      map(response => new Character())
    );
  }

  createNewCharacter(createCharacterDto: CreateCharacterDto): Observable<Character> {
    return of(null).pipe(
      delay(this.delay),
      map((response => new Character()))
    );
    // return timer(this.delay).pipe(mergeMap(() => throwError({ message: 'Nickname already used' })));
  }

}
