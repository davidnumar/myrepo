import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {Observable} from 'rxjs';
import {MovieService} from '../../service/movie.service';
import {Movie} from '../../model/movie.interface';


import { IonicModule } from '@ionic/angular';

import { MovieListPageRoutingModule } from './movie-list-routing.module';

import { MovieListPage } from './movie-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MovieListPageRoutingModule
  ],
  declarations: [MovieListPage]
})
export class MovieListPageModule {}
