import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonMovieCardComponent } from './skeleton-movie-card/skeleton-movie-card.component';
import { MatCardModule } from '@angular/material/card';
import { SkeletonTextComponent } from './skeleton-text/skeleton-text.component';



@NgModule({
  declarations: [
    SkeletonMovieCardComponent,
    SkeletonTextComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [
    SkeletonMovieCardComponent
  ],
})
export class UiSkeletonModule { }
