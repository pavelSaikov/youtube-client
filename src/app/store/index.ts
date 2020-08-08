import { ISortingParams } from '../components/header/search-options/search-options.models';
import { IVideoInfo } from '../models/search-response.models';

export interface IActionPayload<T> {
  payload: T;
}

export interface IAppState {
  sortingParams: ISortingParams;
  searchResults: IVideoInfo[];
}

export enum StoreCategories {
  sorting = 'sorting',
}
