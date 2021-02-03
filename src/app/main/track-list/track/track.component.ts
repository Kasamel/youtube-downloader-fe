import { Component, Input, OnInit } from '@angular/core';
import { Track } from 'src/app/shared/model/track.model';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {

  @Input() track: Track;
  @Input() index: number;

  constructor() { }

  ngOnInit(): void {
  }

}
