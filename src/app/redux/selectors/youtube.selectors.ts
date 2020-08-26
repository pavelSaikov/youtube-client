// tslint:disable: typedef
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { Feature } from '../state.models';

const featureSelector = createFeatureSelector(Feature.Youtube);

export const videoForDetailedDescriptionSelector = createSelector(
  featureSelector,
  ({ videoForDetailedDescription }) => videoForDetailedDescription,
);
export const searchResultsSelector = createSelector(featureSelector, ({ searchResults }) => searchResults);
export const userVideosSelector = createSelector(featureSelector, ({ userVideos }) => userVideos);
