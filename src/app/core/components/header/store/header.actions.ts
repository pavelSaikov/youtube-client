// tslint:disable: typedef
import { createAction, props } from '@ngrx/store';

import { IActionPayload } from '../../../../store/index';
import { IVideoInfo } from '../../../../youtube/models/search-response.models';
import { ISortingParams, SortCategories } from '../search-options/search-options.models';

export const setSortCategory = createAction(
  '[App] Set Sort Category',
  props<IActionPayload<SortCategories>>(),
);
export const setSortingKeyWord = createAction('[App] Set Sorting Keyword', props<IActionPayload<string>>());
export const setSortingParams = createAction(
  '[App] Set Sorting Params',
  props<IActionPayload<ISortingParams>>(),
);
export const setSearchResults = createAction(
  '[App] Set Search Results',
  props<IActionPayload<IVideoInfo[]>>(),
);
