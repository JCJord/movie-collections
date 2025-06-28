import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import {  MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { UiSkeletonModule } from 'src/app/shared/ui-skeleton/ui-skeleton.module';
import { ChartModule } from 'src/app/shared/chart/chart.module';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MovieCardModule } from 'src/app/shared/movie-card/movie-card.module';

@NgModule({
  declarations: [
    SearchComponent,
    SearchInputComponent,
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatPaginatorModule,
    UiSkeletonModule,
    ChartModule,
    MatIconModule,
    MatTooltipModule,
    MatDialogModule,
    MovieCardModule
  ],
})
export class SearchModule { }
