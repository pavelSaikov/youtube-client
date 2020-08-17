// tslint:disable: typedef
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { Feature } from '../../../../store/index';

const featureSelector = createFeatureSelector(Feature.Header);
export const sortingParamsSelector = createSelector(featureSelector, ({ sortingParams }) => sortingParams);
