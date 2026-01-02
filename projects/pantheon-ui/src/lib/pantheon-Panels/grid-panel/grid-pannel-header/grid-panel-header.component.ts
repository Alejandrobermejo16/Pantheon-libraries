import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Input() menuAux: boolean = false;
  @Input() iconMenu: string = 'menu';
  /**
   * Icono que se mostrará en el botón del menú auxiliar.
   * Debe ser un nombre válido de Material Icons (Filled) disponible en:
   * https://fonts.google.com/icons?icon.set=Material+Icons&icon.style=Filled
   * Ejemplos válidos: 'menu', 'more_vert', 'add', 'account_circle', etc.
   */
  gridTemplateColumns: string = `repeat(${this.columns.length}, 1fr)`;
  @Output() extraMenuClick = new EventEmitter<MouseEvent>();


}
