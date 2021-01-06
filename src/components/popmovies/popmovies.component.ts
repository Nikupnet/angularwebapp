import { Component, OnInit } from '@angular/core';
import {PopMoviesResponse} from '../../models/PopMovies';
import {PopMoviesService} from '../../services/popmovies/popmovies.service';

@Component({
  selector: 'app-popmovies',
  templateUrl: './popmovies.component.html',
  styleUrls: ['./popmovies.component.scss']
})
export class PopmoviesComponent implements OnInit {

  constructor(private moviesService: PopMoviesService) {
   }
   popMoviesResponse: PopMoviesResponse;
   posterpath = "https://image.tmdb.org/t/p/w500/";
   


  ngOnInit(): void {
    this.moviesService.getPopMovies()
    .subscribe((data: PopMoviesResponse) => this.popMoviesResponse = { ...data});
  }

}
