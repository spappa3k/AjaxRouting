import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlbumsModel } from './models/models';
import { GeneralService } from './general.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ngAlbum';
  albums?:AlbumsModel[];

  constructor(private http:HttpClient, public gs:GeneralService){
  
    this.http.get<AlbumsModel[]>("https://jsonplaceholder.typicode.com/albums")
    .subscribe(data=> {
      this.albums=data;
    this.gs.getData(this.albums);
    })
  }
}
