import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pantehon-grid-panel-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grid-panel-header.component.html',
  styleUrls: ['./grid-panel-header.component.scss']
})
export class GridPanelHeaderComponent {

  
  columns: Array<String> = ['Ready To Start', 'In Progress', 'Ready to verify/Deploy', 'Deployed'];
  gridTemplateColumns: string = 'repeat(4, 1fr)';

}
