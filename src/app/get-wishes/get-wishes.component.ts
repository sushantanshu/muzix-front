import { Component, OnInit } from '@angular/core';
import { Track } from '../Track';
import { TrackService } from '../track.service';

@Component({
  selector: 'app-get-wishes',
  templateUrl: './get-wishes.component.html',
  styleUrls: ['./get-wishes.component.css']
})
export class GetWishesComponent implements OnInit {

  private tracks = [];

  constructor(private ts: TrackService) { }

  ngOnInit() {
    this.ts
      .getWishes()
      .subscribe((data) => {
        this.tracks = data;
        console.log(data);
    });
  }
  deleteTrack(id) {
    this.ts.deleteTrack(id).subscribe(res => {
      console.log('Deleted');
    });
  }
}
