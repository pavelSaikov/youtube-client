import { createReducer, on, Action } from '@ngrx/store';

import { ISortingParams, SortCategories } from '../search-options/search-options.models';
import { setSortingKeyWord, setSortingParams, setSortCategory } from './header.actions';

export interface IHeaderState {
  sortingParams: ISortingParams;
}

const HEADER_INITIAL_STATE: IHeaderState = {
  sortingParams: { sortCategory: SortCategories.byAlphabet, keyWord: '' },
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
);

export function headerReducer(state: IHeaderState, action: Action): IHeaderState {
  return reducer(state, action);
}
