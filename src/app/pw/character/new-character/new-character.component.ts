import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CharacterState } from '../../../store/state/character.state';
import { getCharacterLoaded, getNewCharacter } from '../../../store/selectors/character.selector';
import { NewCharacterRace } from '../../../services/api/character.service';
import { BaseComponent } from '../../base-component';

@Component({
  selector: 'pw-new-character',
  templateUrl: './new-character.component.html',
  styleUrls: ['./new-character.component.scss']
})
export class NewCharacterComponent extends BaseComponent implements OnInit {

  newCharacter: NewCharacterRace[] = null;
  constructor(private characterStore: Store<CharacterState>) {
    super();
  }

  ngOnInit() {
    this.characterStore
      .select(getNewCharacter)
      .pipe(this.takeUntilDestroy())
      .subscribe(newCharacter => this.newCharacter = newCharacter);
  }

}
