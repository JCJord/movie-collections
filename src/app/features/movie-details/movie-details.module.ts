import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailsComponent } from './movie-details.component';
import { MovieDialogComponent } from './components/movie-dialog/movie-dialog.component';
import { MovieDetailsRoutingModule } from './movie-details.routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { ChartModule } from 'src/app/shared/chart/chart.module';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { UiSkeletonModule } from 'src/app/shared/ui-skeleton/ui-skeleton.module';



@NgModule({
  declarations: [
    MovieDetailsComponent,
    MovieDialogComponent,
    StarRatingComponent
  ],
  imports: [
    CommonModule,
    MovieDetailsRoutingModule,
    MatDialogModule,
    ChartModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    UiSkeletonModule
  ]
})
export class MovieDetailsModule { }
