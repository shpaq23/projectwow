import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { FaIcon } from 'src/app/generic-components/fa-icon.enum';

@Component({
  selector: 'pw-global-loader',
  templateUrl: './global-loader.component.html',
  styleUrls: ['./global-loader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GlobalLoaderComponent {

  @HostBinding('class.pw-center') center = true;

  @HostBinding('class.pw-z-index-3') zIndex = true;

  faIcon: FaIcon = FaIcon.cog;

}
