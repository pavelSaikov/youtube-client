import { IVideoStatistics } from './search-response.models';

export interface IUserVideoInfo {
  title: string;
  description: string;
  imageUrl: string;
  videoUrl: string;
  creationDate: string;
  statistics: IVideoStatistics;
}

export interface IUserVideoInfoWithId extends IUserVideoInfo {
  id: string;
}
