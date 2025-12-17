import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { GridPanelComponent } from './grid-panel.component';
import { CardModule } from '../../pantheon-Cards/card.module';
import { GridPanelHeaderModule } from './grid-pannel-header/grid-panel-header.module';

@NgModule({
  declarations: [
    GridPanelComponent,
  ],
  imports: [
    CommonModule,
    CardModule,
    GridPanelHeaderModule,
    DragDropModule,
  ],
  exports: [
    GridPanelComponent,
  ]
})
export class GridPanelModule {}
