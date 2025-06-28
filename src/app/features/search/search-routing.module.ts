import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search.component';

const routes: Routes = [
  { 
    path: '', 
    component: SearchComponent,
    children: [
      { 
        path: 'movie/:id',
        loadChildren: () => import('../movie-details/movie-details.module').then(m => m.MovieDetailsModule)
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
