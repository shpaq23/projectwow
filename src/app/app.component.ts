import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GlobalLoaderState } from './store/state/global-loader.state';
import { getGlobalLoaderLoading } from './store/selectors/global-loader.selector';

@Component({
  selector: 'pw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  @HostBinding('class.pw-center') classCenter = true;
  loader: boolean;

  constructor(private globalLoaderStore: Store<GlobalLoaderState>,
              private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.globalLoaderStore.select(getGlobalLoaderLoading).subscribe(
      loading => {
        this.loader = loading;
        this.changeDetectorRef.detectChanges();
      });
  }
}
