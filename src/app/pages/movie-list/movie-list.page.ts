import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {MovieService} from '../../service/movie.service';
import {Movie} from '../../model/movie.interface';
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.page.html',
  styleUrls: ['./movie-list.page.scss'],
})
export class MovieListPage implements OnInit {
  result : Observable<Movie>;
  term : string='';
  type: string='';


  constructor(private mservice : MovieService) { }

  ngOnInit() {
  }

  searchChanged () : void{
    this.result = this.mservice.searchMovies(this.term, this.type)
  }

}
