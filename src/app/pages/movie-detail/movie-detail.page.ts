import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../service/movie.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.page.html',
  styleUrls: ['./movie-detail.page.scss'],
})
export class MovieDetailPage implements OnInit {
  especs : object = null
  

  constructor(
    private service : MovieService,
    private activatedRoute: ActivatedRoute,
    private location:Location
  ) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.service.getDetail(id).subscribe(result => {
      this.especs = result; 
      console.log(this.especs);

    });
  }

  public goBack() : void{
    this.location.back();
  }

}
