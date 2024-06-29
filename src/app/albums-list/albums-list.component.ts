import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../general.service';
import { AlbumsModel } from '../models/models';


@Component({
  selector: 'app-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrl: './albums-list.component.css'
})
export class AlbumsListComponent{
  Albums?:AlbumsModel[];
  

  constructor(public gs:GeneralService){
this.Albums=gs.AlbumsList;
  }

}



