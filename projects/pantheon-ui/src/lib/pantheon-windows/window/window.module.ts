import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WindowComponent } from './window.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    WindowComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    WindowComponent,
  ]
})
export class WindowModule { }
