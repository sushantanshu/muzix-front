import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Track } from './Track';
import { ITrack } from './itrack';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  url = 'http://localhost:4000';
  uri1 = 'http://ws.audioscrobbler.com/2.0/?method=track.search&track=';
  uri2 = 'Believe';
  uri3 = '&api_key=8868cd55b37fafd0c36b39c2d7c95952&format=json';

  constructor(private http: HttpClient) { }

  saveTrack(track_name, track_artist, track_url) {
    const obj = {
      track_name: track_name,
      track_artist: track_artist,
      track_url: track_url

    };
    console.log(obj);
    this.http.post(`${this.url}/saveTrack`, obj)
        .subscribe(res => console.log('Done'));
  }

  getTracks(): Observable<ITrack> {
    return this
           .http
           .get<ITrack>(`${this.uri1 + this.uri2 + this.uri3}`);
  }
  searchTracks(input): Observable<ITrack> {
    return this
           .http
           .get<ITrack>(`${this.uri1 + input + this.uri3}`);
  }
  getWishes(): Observable<Track[]> {
    return this
           .http
           .get<Track[]>(`${this.url}`);
  }

  deleteTrack(id) {
    return this
              .http
              .get(`${this.url}/deleteTrack/${id}`);
  }


}

