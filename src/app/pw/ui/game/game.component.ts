import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getNewCharacter } from 'src/app/store/selectors/character.selector';
import { CharacterState } from 'src/app/store/state/character.state';
import { BaseComponent } from 'src/app/utils/base-component';

@Component({
  selector: 'pw-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameComponent extends BaseComponent implements OnInit {

  newCharacter = false;

  constructor(private characterStore: Store<CharacterState>,
              private changeDetectorRef: ChangeDetectorRef) {
    super();
  }

  ngOnInit() {
    this.setCharacterLoaded();
  }

  private setCharacterLoaded(): void {
    this.characterStore
      .select(getNewCharacter)
      .pipe(this.takeUntilDestroy())
      .subscribe(character => {
        this.newCharacter = character;
        this.changeDetectorRef.detectChanges();
      });
  }


}
