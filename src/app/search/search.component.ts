import { Component, OnInit } from '@angular/core';
import { TrackService } from '../track.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  private results = [];
  constructor(private ts: TrackService) { }

  ngOnInit() {
  }
  searchTracks(input) {
    this.ts.searchTracks(input).subscribe((data) => {
      this.results = data.results.trackmatches.track;
      console.log(data);
    });
  }
  saveTrack(track_name, track_artist, track_url) {
    this.ts.saveTrack(track_name, track_artist, track_url);
  }

}
