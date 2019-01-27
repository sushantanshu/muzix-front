import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Track } from './Track';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  uri = 'http://localhost:4000/track';

  constructor(private http: HttpClient) { }

  saveTrack(track_id, track_name, track_comment) {
    const obj = {
      track_id: track_id,
      track_name: track_name,
      track_comment: track_comment
    };
    console.log(obj);
    this.http.post(`${this.uri}/saveTrack`, obj)
        .subscribe(res => console.log('Done'));
  }

  getTracks() {
    return this
           .http
           .get(`${this.uri}`);
  }
  editTrack(id) {
    return this
            .http
            .get(`${this.uri}/editTrack/${id}`);
  }
  updateTrack(track_id, track_name, track_comment, id) {

    const obj = {
        track_id: track_id,
        track_name: track_name,
        track_comment: track_comment
      };
    this
      .http
      .post(`${this.uri}/updateTrack/${id}`, obj)
      .subscribe(res => console.log('Done'));
  }
  deleteTrack(id) {
    return this
              .http
              .get(`${this.uri}/deleteTrack/${id}`);
  }


}

