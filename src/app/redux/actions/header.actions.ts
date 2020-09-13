// tslint:disable: typedef
import { createAction, props } from '@ngrx/store';

import {
  ISortingParams,
  SortCategories,
} from '../../core/components/header/search-options/search-options.models';
import { IActionPayload } from '../state.models';

export const setSortCategory = createAction(
  '[Header] Set Sort Category',
  props<IActionPayload<SortCategories>>(),
);
export const setSortingKeyWord = createAction(
  '[Header] Set Sorting Keyword',
  props<IActionPayload<string>>(),
);
export const setSortingParams = createAction(
  '[Header] Set Sorting Params',
  props<IActionPayload<ISortingParams>>(),
);
export const searchVideos = createAction('[Header] Search Videos', props<IActionPayload<string>>());
export const setIsSearchInputAvailable = createAction(
  '[Header] Set Is Search Input Available',
  props<IActionPayload<boolean>>(),
);
