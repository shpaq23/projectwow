import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CharacterState } from '../../../store/state/character.state';
import { getCharacter } from '../../../store/selectors/character.selector';
import { BaseComponent } from '../../base-component';
import { Character } from '../../../utils/character/Character';

@Component({
  selector: 'pw-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent extends BaseComponent implements OnInit {

  character: Character;
  constructor(private characterStore: Store<CharacterState>) {
    super();
  }

  ngOnInit() {
    this.characterStore
      .select(getCharacter)
      .pipe(this.takeUntilDestroy())
      .subscribe(character => this.character = character);
  }
}
