import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GlobalLoaderState } from './store/state/global-loader.state';
import { getGlobalLoaderLoading } from './store/selectors/global-loader.selector';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { BaseComponent } from './pw/base-component';
import { filter, map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'pw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent extends BaseComponent implements OnInit {

  @HostBinding('class.pw-center') classCenter = true;

  @HostBinding('class.login-background') loginBackground: boolean;

  @HostBinding('class.character-background') characterBackground: boolean;


  loader: boolean;

  constructor(private globalLoaderStore: Store<GlobalLoaderState>,
              private changeDetectorRef: ChangeDetectorRef,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    super();
  }

  ngOnInit(): void {
    this.globalLoaderStore.select(getGlobalLoaderLoading)
      .pipe(this.takeUntilDestroy())
      .subscribe(
      loading => {
        this.loader = loading;
        this.changeDetectorRef.detectChanges();
      });
    this.subscribeToRoute();

  }

  private subscribeToRoute(): void {
    const loginRoutes = ['login', 'register'];
    const characterRouter = ['character'];

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map(route => route.firstChild),
      mergeMap(route => route.url.pipe(
        map(url => url[0].path)
      )))
      .subscribe( url => {
        if (loginRoutes.includes(url)) {
          this.setLoginBackground();
        } else if (characterRouter.includes(url)) {
          this.setCharacterBackground();
        }
      });
  }

  private setLoginBackground() {
    this.loginBackground = true;
    this.characterBackground = false;
  }

  private setCharacterBackground() {
    this.loginBackground = false;
    this.characterBackground = true;
  }

}
