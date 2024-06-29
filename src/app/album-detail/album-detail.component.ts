import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../general.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { DetailsModel } from '../models/models';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent implements OnInit{
Details?:DetailsModel;
  constructor(public http:HttpClient  ,public gs:GeneralService, public route:ActivatedRoute){

  }

  ngOnInit(): void {
    let id=this.route.snapshot.paramMap.get("id")!
this.gs.getDetails(id).subscribe(
  dataDetails=> {
this.Details=dataDetails;
console.log(this.Details);
  })
}

  }

