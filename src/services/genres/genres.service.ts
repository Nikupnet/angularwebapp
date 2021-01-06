import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {GenresResponse} from '../../models/Genres';

@Injectable({
  providedIn: 'root'
})
export class GenresService {

  constructor(private http: HttpClient) { }

  getGenres(): Observable<GenresResponse> {
    return this.http.get<GenresResponse>('https://api.themoviedb.org/3/genre/movie/list?api_key=cc93ac48875a099105b9238502f49a3a&language=de-CH');
  }
  getDiscoverbyGenres(genreid: number): Observable<GenresResponse> {
    return this.http.get<GenresResponse>(' https://api.themoviedb.org/3/discover/movie?api_key=cc93ac48875a099105b9238502f49a3a&language=de-CH&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=');
  }
}
