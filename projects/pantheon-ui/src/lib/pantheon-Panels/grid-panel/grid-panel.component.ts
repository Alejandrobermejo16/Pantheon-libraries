import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pantehon-grid-panel',
  templateUrl: './grid-panel.component.html',
  styleUrls: ['./grid-panel.component.scss']
})
export class GridPanelComponent {

  gridTemplateColumns: string = 'repeat(auto-fill, minmax(200px, 1fr))';
  columns: Array<String> = ['Ready To Start', 'In Progress', 'Ready to verify/Deploy', 'Deployed'];
}
