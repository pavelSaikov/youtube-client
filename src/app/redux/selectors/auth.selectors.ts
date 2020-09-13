// tslint:disable: typedef
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { Feature } from '../state.models';

const featureSelector = createFeatureSelector(Feature.Authorization);

export const authInfoSelector = createSelector(featureSelector, ({ authInfo }) => authInfo);
export const userNameSelector = createSelector(featureSelector, ({ userName }) => userName);
