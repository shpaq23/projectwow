import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { CreateCharacterDto } from 'src/app/api/dtos/character/create-character.dto';
import { Character } from 'src/app/pw/infrastructure/character/Character';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private url = environment.apiUrl + '/character';
  private delay = 3500;

  constructor(private httpClient: HttpClient) {

  }

  getCharacter(): Observable<Character> {
    // if (this.afterNewCharacterCreate) {
    //   return of(fakeCharacterResponse).pipe(delay(this.delay));
    // } else {
    //   return of(true).pipe(delay(this.delay));
    // }
    return of(null).pipe(
      delay(this.delay),
      map(response => fakeCharacter)
    );

    // return timer(this.delay).pipe(mergeMap(() => throwError({ message: 'Nickname already used', code: 422 })));

  }

  createNewCharacter(createCharacterDto: CreateCharacterDto): Observable<Character> {
    return of(null).pipe(
      delay(this.delay),
      map((response => fakeCharacter))
    );
    // return timer(this.delay).pipe(mergeMap(() => throwError({ message: 'Nickname already used' })));
  }

}

// const fakeCharacter: Character = new Character(
//   100,
//   100,
//   new CharacterRace(CharacterRaceEnum.HUMAN, ''),
//   new CharacterGender(CharacterGenderEnum.MALE, ''),
//   new CharacterSpecialization(CharacterSpecializationEnum.WARRIOR, ''),
//   new CharacterStats(20, 20, 20, 20, 20)
// );
const fakeCharacter: Character = null;

