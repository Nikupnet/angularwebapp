import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {SearchMoviesResponse} from '../../models/SearchMovies';


const baseURL1 = 'https://api.themoviedb.org/3/search/company?api_key=cc93ac48875a099105b9238502f49a3a&query=';
const baseURL2 = '&page=1';

@Injectable({
  providedIn: 'root'
})
export class SearchMoviesService {

  constructor(private http: HttpClient) { }

    getSearchMovies(searchquery: string): Observable<SearchMoviesResponse> {
    return this.http.get<SearchMoviesResponse>(`${baseURL1}${searchquery}${baseURL2}`);
  }

}