import { Component, OnInit } from '@angular/core';
import {SearchMoviesResponse} from '../../models/SearchMovies';
import {SearchMoviesService} from '../../services/searchmovies/searchmovies.service';

@Component({
  selector: 'app-searchmovies',
  templateUrl: './searchmovies.component.html',
  styleUrls: ['./searchmovies.component.scss']
})
export class SearchmoviesComponent implements OnInit {

  constructor(private searchMoviesService: SearchMoviesService) { 
  }
 searchMoviesResponse: SearchMoviesResponse;
 posterpath = "https://image.tmdb.org/t/p/w500/";

 log = '';

 logText(value: string): void {
   this.log += `Text changed to '${value}'\n`;
 }
 ngOnInit(): void {
 }

 searchMovies(value: string): void {
  this.searchMoviesService.getSearchMovies(this.log = value)
       .subscribe((data: SearchMoviesResponse) => this.searchMoviesResponse = { ...data});
 }
}
