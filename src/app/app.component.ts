import {Component, HostBinding} from '@angular/core';

@Component({
  selector: 'pw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @HostBinding('class.pw-center') classCenter = true;
  title = 'projectwow';
}
