import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from './movie-card.component';
import { MatButtonModule } from '@angular/material/button';
import { ChartModule } from '../chart/chart.module';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    MovieCardComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    ChartModule,
    MatIconModule,
    MatTooltipModule,
    MatCardModule,
    MatDialogModule,
  ],
  exports: [
    MovieCardComponent
  ]
})
export class MovieCardModule { }
