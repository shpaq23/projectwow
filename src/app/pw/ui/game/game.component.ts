import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'pw-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameComponent {

  constructor() {
  }

}
