import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { AllmoviesComponent } from './components/allmovies/allmovies.component';
import { PopmoviesComponent } from './components/popmovies/popmovies.component';
import { FavmoviesComponent } from './components/favmovies/favmovies.component';
import { BestmoviesComponent } from './components/bestmovies/bestmovies.component';
import { ReleasemoviesComponent } from './components/releasemovies/releasemovies.component';
import { SearchmoviesComponent } from './components/searchmovies/searchmovies.component';
import { GenresComponent } from './components/genres/genres.component';
import { DisplaymovieComponent } from './components/displaymovie/displaymovie.component';
import { MoviedetailComponent } from './components/moviedetail/moviedetail.component';
import { HttpClientModule } from '@angular/common/http'; 

@NgModule({
  declarations: [
    AppComponent,
    AllmoviesComponent,
    PopmoviesComponent,
    FavmoviesComponent,
    BestmoviesComponent,
    ReleasemoviesComponent,
    SearchmoviesComponent,
    GenresComponent,
    DisplaymovieComponent,
    MoviedetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
