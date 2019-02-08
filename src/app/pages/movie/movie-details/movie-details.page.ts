import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Movie } from 'src/app/services/models/movie';
import { MovieService } from 'src/app/services/movie.service';
import { MOVIE_ROUTE_PARAMS } from '../movie.routes';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {

  public movie$: Observable<Movie>;

  constructor(private route: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit() {
    this.movie$ = this.route.paramMap
      .pipe(
        switchMap((params: Params) =>
          this.movieService.getMovie(params.get(MOVIE_ROUTE_PARAMS.ID)))
      );
  }

}
