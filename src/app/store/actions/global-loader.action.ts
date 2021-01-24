import { Action } from '@ngrx/store';

export enum GlobalLoaderTypes {
  StartLoading = '[GlobalLoader] Start Loading',
  StopLoading = '[GlobalLoader] Stop Loading'
}

export class StartLoading implements Action {
  public readonly type = GlobalLoaderTypes.StartLoading;
}
export class StopLoading implements Action {
  public readonly type = GlobalLoaderTypes.StopLoading;
}

export type GlobalLoaderActions = StartLoading | StopLoading;
