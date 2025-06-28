import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { UiSkeletonModule } from 'src/app/shared/ui-skeleton/ui-skeleton.module';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { ChartModule } from 'src/app/shared/chart/chart.module';

@NgModule({
  declarations: [
    SearchComponent,
    SearchInputComponent,
    MovieCardComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatPaginatorModule,
    UiSkeletonModule,
    ChartModule
  ],
})
export class SearchModule { }
