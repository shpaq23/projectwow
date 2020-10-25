import { Component, OnDestroy } from '@angular/core';
import { MonoTypeOperatorFunction, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

// TODO: Add Angular decorator.
@Component({
  selector: 'pw-base-component',
  template: ''
})
export abstract class BaseComponent implements OnDestroy {

  protected onDestroy$: Subject<any> = new Subject<any>();

  private readonly parentNgOnDestroyMethod: () => void;

  protected constructor() {
    this.parentNgOnDestroyMethod = this.ngOnDestroy;
    this.ngOnDestroy = () => {
      this.parentNgOnDestroyMethod();
      this.complete();
    };
  }

  ngOnDestroy() { }

  protected takeUntilDestroy<T>(): MonoTypeOperatorFunction<T> {
    return (input$) => input$.pipe(
      takeUntil(this.onDestroy$)
    );
  }

  private complete() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
