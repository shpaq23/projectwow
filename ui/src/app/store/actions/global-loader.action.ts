import { createAction } from '@ngrx/store';

export const startLoader = createAction(
  '[GlobalLoader] Start Loading'
);

export const stopLoader = createAction(
  '[GlobalLoader] Stop Loading'
);
