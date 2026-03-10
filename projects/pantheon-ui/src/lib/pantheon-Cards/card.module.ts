import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { WindowModule } from '../pantheon-windows/window/window.module'; 
import { MatIconModule } from '@angular/material/icon';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    CardComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    WindowModule,
    DragDropModule
  ],
  exports: [
    CardComponent,
  ]
})
export class CardModule { }
