import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CharacterState } from '../../../store/state/character.state';
import { GetCharacter } from '../../../store/actions/character.action';
import { getCharacterLoaded } from '../../../store/selectors/character.selector';

@Component({
  selector: 'pw-new-character',
  templateUrl: './new-character.component.html',
  styleUrls: ['./new-character.component.scss']
})
export class NewCharacterComponent implements OnInit {

  constructor(private characterStore: Store<CharacterState>) { }

  ngOnInit() {
    this.characterStore.select(getCharacterLoaded)
      .subscribe(loaded => {
        if (!loaded) {
          this.characterStore.dispatch(new GetCharacter(true));
        }});
  }

}
