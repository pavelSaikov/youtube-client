import { createReducer, on, Action } from '@ngrx/store';

import {
  ISortingParams,
  SortCategories,
} from '../../core/components/header/search-options/search-options.models';
import {
  setIsSearchInputAvailable,
  setSortingKeyWord,
  setSortingParams,
  setSortCategory,
} from '../actions/header.actions';

export interface IHeaderState {
  sortingParams: ISortingParams;
  isSearchInputAvailable: boolean;
}

const HEADER_INITIAL_STATE: IHeaderState = {
  sortingParams: { sortCategory: SortCategories.byAlphabet, keyWord: '' },
  isSearchInputAvailable: true,
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
  on(setIsSearchInputAvailable, (state, { payload }) => ({ ...state, isSearchInputAvailable: payload })),
);

export function headerReducer(state: IHeaderState, action: Action): IHeaderState {
  return reducer(state, action);
}
