import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { CreateCharacterDto } from 'src/app/api/dtos/character/create-character.dto';
import { Character } from 'src/app/pw/infrastructure/character/Character';
import { CharacterGender } from 'src/app/pw/infrastructure/character/CharacterGender';
import { CharacterRace } from 'src/app/pw/infrastructure/character/CharacterRace';
import { CharacterSpecialization } from 'src/app/pw/infrastructure/character/CharacterSpecialization';
import { CharacterStats } from 'src/app/pw/infrastructure/character/CharacterStats';
import { CharacterGenderEnum } from 'src/app/pw/infrastructure/character/enumes/character-gender.enum';
import { CharacterRaceEnum } from 'src/app/pw/infrastructure/character/enumes/character-race.enum';
import { CharacterSpecializationEnum } from 'src/app/pw/infrastructure/character/enumes/character-specialization.enum';
import { environment } from 'src/environments/environment';


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
      map(response => fakeCharacter)
    );
  }

  createNewCharacter(createCharacterDto: CreateCharacterDto): Observable<Character> {
    return of(null).pipe(
      delay(this.delay),
      map((response => fakeCharacter))
    );
    // return timer(this.delay).pipe(mergeMap(() => throwError({ message: 'Nickname already used' })));
  }

}

const fakeCharacter: Character = new Character(
  100,
  100,
  new CharacterRace(CharacterRaceEnum.HUMAN, ''),
  new CharacterGender(CharacterGenderEnum.MALE, ''),
  new CharacterSpecialization(CharacterSpecializationEnum.WARRIOR, ''),
  new CharacterStats(20, 20, 20, 20, 20)
);
