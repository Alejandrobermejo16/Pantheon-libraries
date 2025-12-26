import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pantehon-grid-panel-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grid-panel-header.component.html',
  styleUrls: ['./grid-panel-header.component.scss']
})
export class GridPanelHeaderComponent {

  
  @Input() columns: Array<String> = [];
  gridTemplateColumns: string = `repeat(${this.columns.length}, 1fr)`;

}
