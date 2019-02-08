import { Component } from '@angular/core';

import { NavController } from '@ionic/angular';

import { Movie } from 'src/app/services/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: 'movie-list.page.html',
  styleUrls: ['movie-list.page.scss'],
})
export class MovieListPage {

  public movies: Array<Movie> = [];

  private currentPage = 1;
  private moviesPerPage = 2;

  constructor(private navController: NavController, private movieService: MovieService) {
    this.loadMovies();
  }

  loadMovies(infiniteScroll?) {
    this.movieService.getMovies(this.moviesPerPage, this.currentPage)
      .subscribe(movies => {
        if (movies && movies.length) {
          this.currentPage++;
          this.movies.push(...movies);
        } else if (infiniteScroll) {
          infiniteScroll.disabled = true;
        }

        infiniteScroll && infiniteScroll.complete();
      });
  }

  onMovieClick(movieId: number) {
    this.navController.navigateForward(['movies', movieId.toString()]);
  }

  onRefresh(refresher) {
    this.currentPage = 1;
    this.movieService.getMovies(this.moviesPerPage, this.currentPage)
      .subscribe(movies => {
        this.movies.length = 0;
        this.movies.push(...movies);
        refresher.complete();
      });
  }

}
