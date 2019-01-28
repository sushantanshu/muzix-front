import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetTracksComponent } from './get-tracks/get-tracks.component';
import { GetWishesComponent } from './get-wishes/get-wishes.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path: 'track/getWishes',
    component: GetWishesComponent
  },
  {
    path: '',
    component: GetTracksComponent
  },
  {
    path: 'track/search',
    component: SearchComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
