import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {BaseComponent} from '../base-component';
import {CharacterState} from '../../store/state/character.state';
import {Store} from '@ngrx/store';
import {getCharacter} from '../../store/selectors/character.selector';

@Component({
  selector: 'pw-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameComponent extends BaseComponent implements OnInit {

  characterLoaded = false;

  constructor(private characterStore: Store<CharacterState>,
              private changeDetectorRef: ChangeDetectorRef) {
    super();
  }

  ngOnInit() {
    this.setCharacterLoaded();
  }

  private setCharacterLoaded(): void {
    this.characterStore
      .select(getCharacter)
      .pipe(this.takeUntilDestroy())
      .subscribe(character => {
        this.characterLoaded = !(character);
        this.changeDetectorRef.detectChanges();
      });
  }

}
