// tslint:disable: typedef
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { Feature } from '../../store/index';
import { IVideoInfoWithStatistics } from '../models/search-response.models';

const featureSelector = createFeatureSelector(Feature.Youtube);

export const videoForDetailedDescriptionSelector = createSelector(
  featureSelector,
  ({
    videoForDetailedDescription,
  }: {
    videoForDetailedDescription: IVideoInfoWithStatistics;
  }): IVideoInfoWithStatistics => videoForDetailedDescription,
);
export const searchResultsSelector = createSelector(featureSelector, ({ searchResults }) => searchResults);
