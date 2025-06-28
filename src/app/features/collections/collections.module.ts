import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionsComponent } from './collections.component';
import { CreateCollectionComponent } from './components/create-collection/create-collection.component';
import { CollectionFormComponent } from './components/collection-form/collection-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { CollectionsRoutingModule } from './collections-routing.module';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { CollectionSelectDialogComponent } from './components/collection-select-dialog/collection-select-dialog.component';
import { MatListModule } from '@angular/material/list';
import { SearchModule } from '../search/search.module';
import { MovieCardModule } from 'src/app/shared/movie-card/movie-card.module';


@NgModule({
  declarations: [
    CollectionsComponent,
    CreateCollectionComponent,
    CollectionFormComponent,
    CollectionSelectDialogComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    CollectionsRoutingModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule,
    MatListModule,
    MovieCardModule
  ]
})
export class CollectionsModule { }
