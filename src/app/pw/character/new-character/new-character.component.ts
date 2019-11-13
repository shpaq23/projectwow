import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CharacterState } from '../../../store/state/character.state';
import { GetNewCharacter } from '../../../store/actions/character.action';
import { getCharacterLoaded, getNewCharacter } from '../../../store/selectors/character.selector';
import { NewCharacterRace } from '../../../services/api/character.service';

@Component({
  selector: 'pw-new-character',
  templateUrl: './new-character.component.html',
  styleUrls: ['./new-character.component.scss']
})
export class NewCharacterComponent implements OnInit {

  newCharacter: NewCharacterRace[] = null;
  constructor(private characterStore: Store<CharacterState>) { }

  ngOnInit() {
    this.characterStore
      .select(getNewCharacter)
      .subscribe(newCharacter => this.newCharacter = newCharacter);
    this.characterStore
      .select(getCharacterLoaded)
      .subscribe(loaded => {
        if (!loaded) {
          this.characterStore.dispatch(new GetNewCharacter());
        }
      });
  }

}
