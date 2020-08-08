// tslint:disable: typedef
import { createAction, props } from '@ngrx/store';

import { ISortingParams, SortCategories } from '../components/header/search-options/search-options.models';
import { IVideoInfo } from '../models/search-response.models';
import { IActionPayload } from './index';

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
