import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetTracksComponent } from './get-tracks/get-tracks.component';
import { SaveTrackComponent } from './save-track/save-track.component';
import { EditTrackComponent } from './edit-track/edit-track.component';

const routes: Routes = [
  {
    path: 'track/saveTrack',
    component: SaveTrackComponent
  },
  {
    path: 'track/editTrack/:id',
    component: EditTrackComponent
  },
  {
    path: 'track',
    component: GetTracksComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
