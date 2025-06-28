import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionsComponent } from './collections.component';
import { CreateCollectionComponent } from './components/create-collection/create-collection.component';

const routes: Routes = [
  {
    path: '',
    component: CollectionsComponent,

  },
  { path: 'create', component: CreateCollectionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionsRoutingModule { }
