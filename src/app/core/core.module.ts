import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    TopBarComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatTooltipModule,
    MatIconModule
  ],
  exports: [
    TopBarComponent,
    MatCardModule
  ]
})
export class CoreModule { }
