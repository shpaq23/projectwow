import {ChangeDetectionStrategy, Component, ElementRef, HostBinding, Input, OnChanges, Renderer2} from '@angular/core';
import { CharacterRaceClassEnum, CharacterRaceEnum, CharacterRaceGenderEnum } from '../../pw/game/character/character.enums';

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

  @HostBinding('style.height.px') @Input() height: number;

  modelUrl: string;

  loading: boolean;

  alt: string;

  ngOnChanges(): void {
    this.loading = true;
    this.alt = this.characterRace + this.characterRaceGender + this.characterRaceClass;
    this.modelUrl = `assets/models/${this.alt.toLowerCase()}.gif`;
  }

}
