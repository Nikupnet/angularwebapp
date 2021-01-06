import { Component, OnInit } from '@angular/core';
import {MoviesResponse} from '../../models/Movies';
import {MoviesService} from '../../services/movies/movies.service';
import {Router, ActivatedRoute, Params} from '@angular/router';


@Component({
  selector: 'app-allmovies',
  templateUrl: './allmovies.component.html',
  styleUrls: ['./allmovies.component.scss']
})
export class AllmoviesComponent implements OnInit {
 
//genreid: number;

  constructor(private moviesService: MoviesService, private activatedRoute: ActivatedRoute) {
    
   }

  moviesResponse: MoviesResponse;


  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      if ("genreid" in params) {
        const genreid = params['genreid'];
        this.moviesService.getMoviesbyGenre(genreid)
        .subscribe((data: MoviesResponse) => this.moviesResponse = { ...data});
      } else
      {
      this.moviesService.getMovies()
      .subscribe((data: MoviesResponse) => this.moviesResponse = { ...data});
      }

    })

  }


  
}