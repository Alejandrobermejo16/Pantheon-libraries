import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { WindowModule } from '../pantheon-windows/window/window.module'; 
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    CardComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    WindowModule
  ],
  exports: [
    CardComponent,
  ]
})
export class CardModule { }
