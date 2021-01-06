import { Component, OnInit } from '@angular/core';
import {MoviesResponse} from '../../models/Movies';
import {ReleaseMoviesService} from '../../services/releasemovies/releasemovies.service';

@Component({
  selector: 'app-releasemovies',
  templateUrl: './releasemovies.component.html',
  styleUrls: ['./releasemovies.component.scss']
})
export class ReleasemoviesComponent implements OnInit {

  constructor(private releaseMoviesService: ReleaseMoviesService) { 
  }

  moviesResponse: MoviesResponse;
 posterpath = "https://image.tmdb.org/t/p/w500/";

 ngOnInit(): void {
   this.releaseMoviesService.getReleaseMovies()
     .subscribe((data: MoviesResponse) => this.moviesResponse = { ...data});
 }
 
}