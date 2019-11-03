import { OnDestroy } from '@angular/core';

export abstract class BaseComponent implements OnDestroy {
  protected componentAlive = true;
  ngOnDestroy(): void {
    console.log('baseComponent OnDestroy');
    this.componentAlive = false;
  }

}
