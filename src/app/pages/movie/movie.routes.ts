import { Routes } from '@angular/router';

import { MovieListPage } from './movie-list/movie-list.page';
import { MovieDetailsPage } from './movie-details/movie-details.page';

export const MOVIE_ROUTE_PARAMS = {
  ID: 'id'
};

export const MOVIE_ROUTES: Routes = [
  {
    path: '',
    component: MovieListPage,
    pathMatch: 'full'
  },
  {
    path: `:${MOVIE_ROUTE_PARAMS.ID}`,
    component: MovieDetailsPage
  }
];
