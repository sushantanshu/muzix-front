import { Component, OnInit } from '@angular/core';
import { Track } from '../Track';
import { TrackService } from '../track.service';

@Component({
  selector: 'app-get-tracks',
  templateUrl: './get-tracks.component.html',
  styleUrls: ['./get-tracks.component.css']
})
export class GetTracksComponent implements OnInit {

  tracks: Track[];

  constructor(private ts: TrackService) { }

  ngOnInit() {
    this.ts
      .getTracks()
      .subscribe((data: Track[]) => {
        this.tracks = data;
    });
  }
  deleteTrack(id) {
    this.ts.deleteTrack(id).subscribe(res => {
      console.log('Deleted');
    });
  }
}
