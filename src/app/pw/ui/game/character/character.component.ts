import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CharacterState } from 'src/app/store/state/character.state';
import { getCharacter } from 'src/app/store/selectors/character.selector';
import { BaseComponent } from 'src/app/utils/base-component';
import { Character } from 'src/app/pw/infrastructure/character/Character';

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
