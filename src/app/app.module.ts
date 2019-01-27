import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaveTrackComponent } from './save-track/save-track.component';
import { GetTracksComponent } from './get-tracks/get-tracks.component';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TrackService } from './track.service';
import { EditTrackComponent } from './edit-track/edit-track.component';



@NgModule({
  declarations: [
    AppComponent,
    SaveTrackComponent,
    GetTracksComponent,
    EditTrackComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [TrackService],
  bootstrap: [AppComponent]
})
export class AppModule { }
