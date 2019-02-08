import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Movie } from './models/movie';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient: HttpClient) { }

  getMovies(take: number = 10, page: number = 1): Observable<Array<Movie>> {
    return this.httpClient.get<Array<Movie>>(`${environment.apiEndpoint}/movies?_limit=${take}&_page=${page}`);
  }

  getMovie(id: number) {
    return this.httpClient.get<Movie>(`${environment.apiEndpoint}/movies/${id}`);
  }

}
