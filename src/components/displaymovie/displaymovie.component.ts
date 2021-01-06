import { Component, Input, OnInit } from '@angular/core';
import {MoviesResponse} from '../../models/Movies';
import { Router } from '@angular/router';

@Component({
  selector: 'app-displaymovie',
  templateUrl: './displaymovie.component.html',
  styleUrls: ['./displaymovie.component.scss']
})
export class DisplaymovieComponent implements OnInit {

  @Input() moviesResponse: MoviesResponse;
  display = false;
  display1 = false;
  displayButton = 'Mehr';


  constructor(private router: Router) { }
  posterpath = "https://image.tmdb.org/t/p/w500/";

  ngOnInit(): void {
  }
  changeButton() {
    this.display = !this.display;
    if (this.display === true) {
      this.displayButton = 'Weniger';
    } else {
      this.displayButton = 'Mehr';
    }
  }
  goMovieDetail(movieid: number): void {
    console.log("Click, ", movieid);
    this.router.navigate(['/moviedetail-component'], { queryParams: { movieid: movieid } });
   } 
}
