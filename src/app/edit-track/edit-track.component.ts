import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TrackService } from '../track.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-track',
  templateUrl: './edit-track.component.html',
  styleUrls: ['./edit-track.component.css']
})
export class EditTrackComponent implements OnInit {
  track: any = {};
  angForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ts: TrackService,
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      track_id: ['', Validators.required],
      track_name: ['', Validators.required],
      track_comment: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.ts.editTrack(params['id']).subscribe(res => {
        this.track = res;
      });
    });
  }

  updateTrack(track_id, track_name, track_comment) {
    this.route.params.subscribe(params => {
      this.ts.updateTrack(track_id, track_name, track_comment, params['id']);
      this.router.navigate(['track']);
    });
  }
}
