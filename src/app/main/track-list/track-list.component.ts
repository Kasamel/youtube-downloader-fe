import { Component, OnInit } from '@angular/core';
import { Track } from '../../shared/model/track.model';
import { TrackListService} from '../../shared/service/track-list.service';

@Component({
  selector: 'app-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.css']
})
export class TrackListComponent implements OnInit {

  trackList: Track[];

  constructor(private trackListService: TrackListService) {
  }

  ngOnInit(): void {
    this.getAllTracks();
  }

  getAllTracks() {
    return this.trackListService.getTrackList().subscribe((tracks: Track[]) => {
      this.trackList = tracks;
    },
      error => {
        console.log(error);
      });
  }

}
