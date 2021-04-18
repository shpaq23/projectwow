import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { startLoader, stopLoader } from 'src/app/store/actions/global-loader.action';
import { GlobalLoaderState } from 'src/app/store/state/global-loader.state';

@Injectable({
  providedIn: 'root'
})
export class GlobalLoaderCommands {

  constructor(private readonly globalLoaderStore$: Store<GlobalLoaderState>) {
  }

  startLoader(): void {
    this.globalLoaderStore$.dispatch(startLoader());
  }

  stopLoader(): void {
    this.globalLoaderStore$.dispatch(stopLoader());
  }

}
