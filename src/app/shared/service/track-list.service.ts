import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Track } from '../model/track.model';
import { TrackDownloadRequest } from '../model/track-download-request.model';

@Injectable({ providedIn: 'root' })
export class TrackListService {

    private urlToApi = "http://localhost:8080/api/downloader";
    private allTrackUrl = "/all";
    private downloadNewUrl = "/";
    private trackList: Observable<Track[]>;

    constructor(private http: HttpClient) {
    }

    getTrackList() {
        return this.http.get<Track[]>(this.urlToApi + this.allTrackUrl).pipe();
    }

    downloadNew(url: string){
        let requestDto = new TrackDownloadRequest(url);
        this.http
        .post(this.downloadNewUrl, requestDto)
        .pipe();
    }
}
