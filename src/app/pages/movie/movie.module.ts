import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { MovieListPage } from './movie-list/movie-list.page';
import { MOVIE_ROUTES } from './movie.routes';
import { MovieDetailsPage } from './movie-details/movie-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(MOVIE_ROUTES)
  ],
  declarations: [MovieListPage, MovieDetailsPage]
})
export class MovieModule { }
