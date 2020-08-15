// tslint:disable: typedef
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { Feature } from '../../store/index';
import { IVideoInfo } from '../models/search-response.models';

const featureSelector = createFeatureSelector(Feature.Youtube);

export const videoForDetailedDescriptionSelector = createSelector(
  featureSelector,
  ({ videoForDetailedDescription }: { videoForDetailedDescription: IVideoInfo }): IVideoInfo =>
    videoForDetailedDescription,
);
