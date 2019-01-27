import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { TrackService } from '../track.service';

@Component({
  selector: 'app-save-track',
  templateUrl: './save-track.component.html',
  styleUrls: ['./save-track.component.css']
})
export class SaveTrackComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder, private ts: TrackService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      track_id: ['', Validators.required ],
      track_name: ['', Validators.required ],
      track_comment: ['', Validators.required ]
    });
  }
  saveTrack(track_id, track_name, track_comment) {
    this.ts.saveTrack(track_id, track_name, track_comment);
  }

  ngOnInit() {
  }

}
