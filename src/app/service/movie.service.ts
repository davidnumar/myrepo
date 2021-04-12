import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Movie} from '../model/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
private url : string = " ";
private apiKey : string = '59669e6'
  constructor(private http :HttpClient) { }

   searchMovies(title: string, type: string){
    this.url = `http://www.omdbapi.com/?s=${encodeURI(title)}&type=${type}&apikey=${this.apiKey}`;
    //console.log(this.url);
    return this.http.get<Movie>(this.url).pipe(map(results => results['Search']));
  }

   getDetail(id: string) {
    return this.http.get<Movie>(`http://www.omdbapi.com/?i=${id}&plot=full&apikey=${this.apiKey}`);
    
  }
   
}

//59669e6 API key 