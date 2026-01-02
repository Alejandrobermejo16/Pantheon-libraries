import { NgModule } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { SideActionPanelComponent } from './side-action-panel.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    SideActionPanelComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    SideActionPanelComponent,
  ]
})
export class SideActionPanelModule { }
