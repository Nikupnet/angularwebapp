import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {MoviesResponse} from '../../models/Movies';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getMovies(): Observable<MoviesResponse> {
    return this.http.get<MoviesResponse>(' https://api.themoviedb.org/3/movie/top_rated?api_key=cc93ac48875a099105b9238502f49a3a&language=de-CH&page=1');
  }
  getMoviesbyGenre(genreid: number): Observable<MoviesResponse> {
    return this.http.get<MoviesResponse>(`https://api.themoviedb.org/3/discover/movie?api_key=cc93ac48875a099105b9238502f49a3a&language=de-CH&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreid}`);
  }
}
