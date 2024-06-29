import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AlbumsModel, DetailsModel } from './models/models';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GeneralService {
AlbumsList?:AlbumsModel[];
Details?:DetailsModel;


  constructor(public http:HttpClient) { }

getData(Albums:AlbumsModel[]){
this.AlbumsList=Albums;
}

getDetails(id:string):Observable<DetailsModel>{
  return this.http.get<DetailsModel>("https://jsonplaceholder.typicode.com/photos?id="+(id));
}

}

