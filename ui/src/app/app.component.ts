import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, OnInit } from '@angular/core';
import { GlobalLoaderRepository } from 'src/app/store/repositories/global-loader.repository';
import { BaseComponent } from 'src/app/utils/base-component';

@Component({
  selector: 'pw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent extends BaseComponent implements OnInit {

  @HostBinding('class.pw-center')
  classCenter = true;

  loader: boolean;

  constructor(private readonly globalLoaderRepository: GlobalLoaderRepository,
              private readonly changeDetectorRef: ChangeDetectorRef) {
    super();
  }

  ngOnInit(): void {
    this.globalLoaderRepository.selectGlobalLoaderLoading()
      .pipe(this.takeUntilDestroy())
      .subscribe(
        loading => {
          this.loader = loading;
          this.changeDetectorRef.detectChanges();
        });
  }


}
