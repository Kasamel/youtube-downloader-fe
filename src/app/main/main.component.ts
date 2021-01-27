import { Component, OnInit } from '@angular/core';
import { Track } from '../shared/track.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  allTrackUrl = "http://localhost:8080/api/downloader/all";
  trackList: Track[];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.getAllTracks().subscribe((tracks: Track[]) => {
      this.trackList = tracks;
    },
      error => {
        console.log(error);
      });
  }

  getAllTracks() {
    return this.http.get<Track[]>(this.allTrackUrl).pipe();
  }

}
