import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Character } from 'src/app/pw/infrastructure/character/Character';
import { CharacterRepository } from 'src/app/store/repositories/character.repository';
import { BaseComponent } from 'src/app/utils/base-component';

@Component({
  selector: 'pw-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterComponent extends BaseComponent implements OnInit {

  character: Character;

  constructor(private readonly characterRepository: CharacterRepository,
              private readonly changeDetectorRef: ChangeDetectorRef) {
    super();
  }

  ngOnInit() {
    this.characterRepository.selectCharacter()
      .pipe(this.takeUntilDestroy())
      .subscribe(character => {
        this.character = character;
        this.changeDetectorRef.detectChanges();
      });
  }
}
