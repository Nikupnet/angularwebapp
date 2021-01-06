import { Component, OnInit } from '@angular/core';
import {MoviesResponse} from '../../models/Movies';
import {FavMoviesService} from '../../services/favmovies/favmovies.service';

@Component({
  selector: 'app-favmovies',
  templateUrl: './favmovies.component.html',
  styleUrls: ['./favmovies.component.scss']
})
export class FavmoviesComponent implements OnInit {
 
  constructor(private favMoviesService: FavMoviesService) { 
   }

   moviesResponse: MoviesResponse;
  posterpath = "https://image.tmdb.org/t/p/w500/";

  ngOnInit(): void {
    this.favMoviesService.getFavMovies()
      .subscribe((data: MoviesResponse) => this.moviesResponse = { ...data});
  }
  
}