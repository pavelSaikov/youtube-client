import { ISearchItem } from 'src/app/youtube/models/search-item.models';

export enum SortCategories {
  byDate = 'byDate',
  byDateReverse = 'byDateReverse',
  byCountViews = 'byCountViews',
  byCountViewsReverse = 'byCountViewsReverse',
  byWord = 'byWord',
  byAlphabet = 'byAlphabet',
}

export interface ISortingParams {
  sortCategory: SortCategories;
  keyWord: string;
}

export interface IVideoCategorySorter {
  (i1: ISearchItem, i2: ISearchItem, word?: string): number;
}

export const sortCategoriesSortFunctionsMap: Map<SortCategories, IVideoCategorySorter> = new Map<
  SortCategories,
  IVideoCategorySorter
>([
  [
    SortCategories.byDate,
    (i1: ISearchItem, i2: ISearchItem): number => {
      const dateI1: number = new Date(i1.publishedAt).getTime();
      const dateI2: number = new Date(i2.publishedAt).getTime();

      return -(dateI1 - dateI2);
    },
  ],
  [
    SortCategories.byDateReverse,
    (i1: ISearchItem, i2: ISearchItem): number => {
      const dateI1: number = new Date(i1.publishedAt).getTime();
      const dateI2: number = new Date(i2.publishedAt).getTime();

      return dateI1 - dateI2;
    },
  ],
  [
    SortCategories.byCountViews,
    (i1: ISearchItem, i2: ISearchItem): number => {
      const viewsI1: number = Number.parseInt(i1.statistics.viewCount, 10);
      const viewsI2: number = Number.parseInt(i2.statistics.viewCount, 10);

      return viewsI2 - viewsI1;
    },
  ],
  [
    SortCategories.byCountViewsReverse,
    (i1: ISearchItem, i2: ISearchItem): number => {
      const viewsI1: number = Number.parseInt(i1.statistics.viewCount, 10);
      const viewsI2: number = Number.parseInt(i2.statistics.viewCount, 10);

      return viewsI1 - viewsI2;
    },
  ],
  [
    SortCategories.byWord,
    function (i1: ISearchItem, i2: ISearchItem): number {
      const keyWord: string = this.keyWord.toLowerCase();
      const maxSubstringLengthForItems: { i1Length: number; i2Length: number } = { i1Length: 0, i2Length: 0 };

      const allKeyWordSubstrings: string[] = keyWord
        .split('')
        .map((_val, index) => keyWord.slice(0, index + 1));

      allKeyWordSubstrings.forEach(substr => {
        const isIncludes: boolean = i1.title.toLowerCase().includes(substr);
        if (isIncludes) {
          maxSubstringLengthForItems.i1Length = substr.length;
        }
      });

      allKeyWordSubstrings.forEach(substr => {
        const isIncludes: boolean = i2.title.toLowerCase().includes(substr);
        if (isIncludes) {
          maxSubstringLengthForItems.i2Length = substr.length;
        }
      });

      return maxSubstringLengthForItems.i2Length - maxSubstringLengthForItems.i1Length;
    },
  ],
  [
    SortCategories.byAlphabet,
    (i1: ISearchItem, i2: ISearchItem): number => {
      return 1;
    },
  ],
]);
