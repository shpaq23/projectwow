import { Component, HostBinding, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GlobalLoaderState } from './store/state/global-loader.state';
import { Observable } from 'rxjs';
import { getGlobalLoaderLoading } from './store/selectors/global-loader.selector';

@Component({
  selector: 'pw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @HostBinding('class.pw-center') classCenter = true;
  loader$: Observable<boolean>;
  router = false;

  constructor(private globalLoaderStore: Store<GlobalLoaderState>) { }

  ngOnInit(): void {
    // NGRX -> ExpressionChangedAfterItHasBeenCheckedError
    setTimeout(() => {
      this.loader$ = this.globalLoaderStore.select(getGlobalLoaderLoading);
    });
  }
}
