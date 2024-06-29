import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AlbumsListComponent } from './albums-list/albums-list.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';


const routes: Routes = [
  {
    path: '', 
    component:HomeComponent
  },
  {
    path: 'albums', 
    component:AlbumsListComponent
  },
  {
    path: 'albums/details/:id', 
    component:AlbumDetailComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

 }
