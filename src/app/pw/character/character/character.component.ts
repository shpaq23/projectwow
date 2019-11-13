import { Component, OnInit } from '@angular/core';
import { Character } from '../../../services/api/character.service';
import { Store } from '@ngrx/store';
import { CharacterState } from '../../../store/state/character.state';
import { GetCharacter } from '../../../store/actions/character.action';
import { getCharacter, getCharacterLoaded } from '../../../store/selectors/character.selector';

@Component({
  selector: 'pw-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  character: Character;
  constructor(private characterStore: Store<CharacterState>) { }

  ngOnInit() {
    this.characterStore
      .select(getCharacter)
      .subscribe(character => this.character = character);
    this.characterStore
      .select(getCharacterLoaded)
      .subscribe(loaded => {
        if (!loaded) {
          this.characterStore.dispatch(new GetCharacter());
    }});
  }
}
