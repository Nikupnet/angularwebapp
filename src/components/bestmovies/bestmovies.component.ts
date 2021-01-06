import { Component, OnInit } from '@angular/core';
import {MoviesResponse} from '../../models/Movies';
import {BestMoviesService} from '../../services/bestmovies/bestmovies.service';

@Component({
  selector: 'app-bestmovies',
  templateUrl: './bestmovies.component.html',
  styleUrls: ['./bestmovies.component.scss']
})
export class BestmoviesComponent implements OnInit {
 
  constructor(private bestMoviesService: BestMoviesService) { 
   }

  moviesResponse: MoviesResponse;
  posterpath = "https://image.tmdb.org/t/p/w500/";

  ngOnInit(): void {
    this.bestMoviesService.getBestMovies()
      .subscribe((data: MoviesResponse) => this.moviesResponse = { ...data});
  }
  
}