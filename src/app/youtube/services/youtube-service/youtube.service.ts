import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, zip, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import {
  ISearchResponse,
  IDetailedInfoResponse,
  IVideoInfo,
  IVideoInfoWithStatistics,
  IVideoStatistics,
} from '../../models/search-response.models';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  private endpoint: string = 'https://www.googleapis.com/youtube/v3';
  private apiKey: string = 'AIzaSyBm-02qoGqi5PzMJhHDaFhWrwb1keqntAs';

  constructor(private http: HttpClient) {}

  private searchDetailedVideoInfo(video: IVideoInfo): Observable<IDetailedInfoResponse> {
    const params: HttpParams = new HttpParams({
      fromObject: { part: 'statistics, snippet  ', id: video.id.videoId, key: this.apiKey },
    });

    return this.http
      .get(`${this.endpoint}/videos?`, { params })
      .pipe(map((response: IDetailedInfoResponse) => response));
  }

  public searchVideos(keyWord: string): Observable<IVideoInfoWithStatistics[]> {
    const params: HttpParams = new HttpParams({
      fromObject: { part: 'snippet', maxResults: '25', q: keyWord, type: 'video', key: this.apiKey },
    });

    return this.http.get(`${this.endpoint}/search?`, { params }).pipe(
      switchMap((response: ISearchResponse) =>
        zip(of(response.items), ...response.items.map(video => this.searchDetailedVideoInfo(video))),
      ),
      map(([videosInfo, ...videosDetailedInfo]: [IVideoInfoWithStatistics[], ...IDetailedInfoResponse[]]) =>
        videosInfo.map((videoInfo, index) => ({
          ...videoInfo,
          statistics: videosDetailedInfo[index].items[0].statistics,
          snippet: {
            ...videoInfo.snippet,
            description: videosDetailedInfo[index].items[0].snippet.description,
          },
        })),
      ),
    );
  }
}
