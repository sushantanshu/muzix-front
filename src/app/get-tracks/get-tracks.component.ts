import { Component, OnInit } from '@angular/core';
import { Track } from '../Track';
import { TrackService } from '../track.service';

@Component({
  selector: 'app-get-tracks',
  templateUrl: './get-tracks.component.html',
  styleUrls: ['./get-tracks.component.css']
})
export class GetTracksComponent implements OnInit {

  private results = [];

  constructor(private ts: TrackService) { }

  ngOnInit() {
    this.ts.getTracks().subscribe(data => (this.results = data.results.trackmatches.track));
    console.log(this.results);
  }
  saveTrack(track_name, track_artist, track_url) {
    this.ts.saveTrack(track_name, track_artist, track_url);
  }
}
