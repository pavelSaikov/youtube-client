import { IVideoStatistics } from './search-response.models';

export interface ISearchItem {
  image: string;
  title: string;
  statistics?: IVideoStatistics;
  publishedAt: string;
  id: string;
}
