import { createFeatureSelector, createSelector } from '@ngrx/store';
import { userFeatureKey } from 'src/app/store/reducers/user.reducer';
import { UserState } from 'src/app/store/state/user.state';

const getUserFeatureState = createFeatureSelector<UserState>(userFeatureKey);

export const getLoggedUser = createSelector(
  getUserFeatureState,
  state => state.user
);
export const getLoggedUserError = createSelector(
  getUserFeatureState,
  state => state.error
);
export const getLoggedUserLoading = createSelector(
  getUserFeatureState,
  state => state.loading
);
