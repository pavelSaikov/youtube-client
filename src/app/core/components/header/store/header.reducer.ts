import { createReducer, on, Action } from '@ngrx/store';

import { IVideoInfo } from '../../../../youtube/models/search-response.models';
import { ISortingParams, SortCategories } from '../search-options/search-options.models';
import { setSearchResults, setSortingKeyWord, setSortingParams, setSortCategory } from './header.actions';

export interface IHeaderState {
  sortingParams: ISortingParams;
  searchResults: IVideoInfo[];
}

const HEADER_INITIAL_STATE: IHeaderState = {
  sortingParams: { sortCategory: SortCategories.byAlphabet, keyWord: '' },
  searchResults: [],
};

const reducer: Function = createReducer(
  HEADER_INITIAL_STATE,
  on(setSortCategory, (state: IHeaderState, { payload }) => ({
    ...state,
    sortingParams: { ...state.sortingParams, sortCategory: payload },
  })),
  on(setSortingKeyWord, (state: IHeaderState, { payload }) => ({
    ...state,
    sortingParams: { ...state.sortingParams, keyWord: payload },
  })),
  on(setSortingParams, (state, { payload }) => ({ ...state, sortingParams: payload })),
  on(setSearchResults, (state, { payload }) => ({ ...state, searchResults: payload })),
);

export function headerReducer(state: IHeaderState, action: Action): IHeaderState {
  return reducer(state, action);
}
