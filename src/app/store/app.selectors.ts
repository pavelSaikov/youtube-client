// tslint:disable: typedef
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { StoreCategories } from './index';

const featureSelector = createFeatureSelector(StoreCategories.sorting);
export const sortingParamsSelector = createSelector(featureSelector, ({ sortingParams }) => sortingParams);
export const searchResultsSelector = createSelector(featureSelector, ({ searchResults }) => searchResults);
