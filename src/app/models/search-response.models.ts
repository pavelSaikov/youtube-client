export interface IVideoImage {
  url: string;
  width: number;
  height: number;
}

export interface IVideoStatistics {
  statistics: {
    viewCount: string;
    likeCount: string;
    dislikeCount: string;
    commentCount: string;
  };
}

export interface IVideoInfo {
  id: string;
  snippet: {
    publishedAt: string;
    title: string;
    description: string;
    thumbnails: {
      medium: IVideoImage;
      high: IVideoImage;
    };
  };
}

export interface ISearchResponse {
  items: IVideoInfo[];
}
