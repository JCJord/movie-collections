import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonMovieCardComponent } from './skeleton-movie-card/skeleton-movie-card.component';
import { MatCardModule } from '@angular/material/card';
import { SkeletonTextComponent } from './skeleton-text/skeleton-text.component';
import { MovieDetailsSkeletonComponent } from '../movie-details-skeleton/movie-details-skeleton.component';


@NgModule({
  declarations: [
    SkeletonMovieCardComponent,
    SkeletonTextComponent,
    MovieDetailsSkeletonComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [
    SkeletonMovieCardComponent,
    MovieDetailsSkeletonComponent
  ],
})
export class UiSkeletonModule { }
