import { createFeatureSelector, createSelector } from '@ngrx/store';
import { globalLoaderFeatureKey } from 'src/app/store/reducers/global-loader.reducer';
import { GlobalLoaderState } from 'src/app/store/state/global-loader.state';

const getGlobalLoaderFeatureState = createFeatureSelector<GlobalLoaderState>(globalLoaderFeatureKey);

export const getGlobalLoaderLoading = createSelector(
  getGlobalLoaderFeatureState,
  state => state.loading
);
