import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    TopBarComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [
    TopBarComponent,
    MatCardModule
  ]
})
export class CoreModule { }
