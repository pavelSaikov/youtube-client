export interface IVideoImage {
  url: string;
  width: number;
  height: number;
}

export interface IVideoStatistics {
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  commentCount: string;
}

export interface IDetailedInfoResponse {
  items: {
    snippet: {
      description: string;
    };
    statistics: IVideoStatistics;
  }[];
}

export interface IVideoInfo {
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
    description: string;
    thumbnails: {
      medium: IVideoImage;
      high: IVideoImage;
    };
    publishedAt: string;
  };
}

export interface IVideoInfoWithStatistics extends IVideoInfo {
  statistics: IVideoStatistics;
}

export interface ISearchResponse {
  items: IVideoInfo[];
}
