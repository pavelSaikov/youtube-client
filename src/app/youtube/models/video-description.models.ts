import { IVideoStatistics } from './search-response.models';

export interface IVideoDescription {
  image: string;
  title: string;
  description: string;
  statistics: IVideoStatistics;
  publishedAt: string;
}
