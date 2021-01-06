import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {PopMoviesResponse} from '../../models/PopMovies';

@Injectable({
  providedIn: 'root'
})
export class PopMoviesService {

  constructor(private http: HttpClient) { }

  getPopMovies(): Observable<PopMoviesResponse> {
    return this.http.get<PopMoviesResponse>('https://api.themoviedb.org/3/movie/popular?api_key=cc93ac48875a099105b9238502f49a3a&language=de-CH&page=1');
  }

}
