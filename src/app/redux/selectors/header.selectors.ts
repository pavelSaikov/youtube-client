// tslint:disable: typedef
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { Feature } from '../state.models';

const featureSelector = createFeatureSelector(Feature.Header);
export const sortingParamsSelector = createSelector(featureSelector, ({ sortingParams }) => sortingParams);
export const isSearchInputAvailableSelector = createSelector(
  featureSelector,
  ({ isSearchInputAvailable }) => isSearchInputAvailable,
);
