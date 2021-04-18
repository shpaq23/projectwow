import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getGlobalLoaderLoading } from 'src/app/store/selectors/global-loader.selector';
import { GlobalLoaderState } from 'src/app/store/state/global-loader.state';

@Injectable({
  providedIn: 'root'
})
export class GlobalLoaderRepository {

  constructor(private readonly globalLoaderStore$: Store<GlobalLoaderState>) {
  }

  selectGlobalLoaderLoading(): Observable<boolean> {
    return this.globalLoaderStore$.select(getGlobalLoaderLoading);
  }
}
