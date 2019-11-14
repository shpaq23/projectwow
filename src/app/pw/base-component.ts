import { OnDestroy } from '@angular/core';
import { MonoTypeOperatorFunction, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

export abstract class BaseComponent implements OnDestroy {

  protected onDestroy$: Subject<any> = new Subject<any>();

  private readonly parentNgOnDestroyMethod: () => void;

  protected constructor() {
    // @ts-ignore
    this.parentNgOnDestroyMethod = this.ngOnDestroy();
    this.ngOnDestroy = () => {
      this.parentNgOnDestroyMethod();
      this.complete();
    };
  }

  ngOnDestroy(): void { }

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
