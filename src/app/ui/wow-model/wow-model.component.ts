import { ChangeDetectionStrategy, Component, HostBinding, Input, OnChanges } from '@angular/core';
import { CharacterRaceClassEnum, CharacterRaceEnum, CharacterRaceGenderEnum } from '../../pw/character/character.enums';

@Component({
  selector: 'pw-wow-model',
  templateUrl: './wow-model.component.html',
  styleUrls: ['./wow-model.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WowModelComponent implements OnChanges{

  @Input() characterRace: CharacterRaceEnum;

  @Input() characterRaceGender: CharacterRaceGenderEnum;

  @Input() characterRaceClass: CharacterRaceClassEnum;

  @HostBinding('class.pw-center-vertical') centerVertical = true;

  modelUrl: string;

  loading: boolean;

  alt: string;

  ngOnChanges(): void {
    this.loading = true;
    this.alt = this.characterRace + this.characterRaceGender + this.characterRaceClass;
    this.modelUrl =
      `assets/models/${this.alt.toLowerCase()}.gif`;
  }

}
