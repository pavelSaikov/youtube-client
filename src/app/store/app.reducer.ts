import { createReducer, on, Action } from '@ngrx/store';

import { SortCategories } from '../components/header/search-options/search-options.models';
import { setSearchResults, setSortingKeyWord, setSortingParams, setSortCategory } from './app.actions';
import { IAppState } from './index';

const APP_INITIAL_STATE: IAppState = {
  sortingParams: { sortCategory: SortCategories.byAlphabet, keyWord: '' },
  searchResults: [],
};

const reducer: Function = createReducer(
  APP_INITIAL_STATE,
  on(setSortCategory, (state: IAppState, { payload }) => ({
    ...state,
    sortingParams: { ...state.sortingParams, sortCategory: payload },
  })),
  on(setSortingKeyWord, (state: IAppState, { payload }) => ({
    ...state,
    sortingParams: { ...state.sortingParams, keyWord: payload },
  })),
  on(setSortingParams, (state, { payload }) => ({ ...state, sortingParams: payload })),
  on(setSearchResults, (state, { payload }) => ({ ...state, searchResults: payload })),
);

export function appReducer(state: IAppState, action: Action): IAppState {
  return reducer(state, action);
}
