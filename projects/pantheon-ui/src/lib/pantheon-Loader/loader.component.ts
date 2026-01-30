import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pantheon-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
  onClick // If later you want to close the loader from inside, call this.hide()
    (onClick: any, arg1: string) {
      throw new Error('Method not implemented.');
  }
  /** Controls visibility of the modal/backdrop and spinner */
  @Input() show: boolean = false;

  /** Optional text to show under the spinner */
  @Input() text: string | null = 'Cargando...';

  /** Two-way binding helper if you want to update parent when closing internally */
  @Output() showChange = new EventEmitter<boolean>();

  // If later you want to close the loader from inside, call this.hide()
  hide() {
    this.show = false;
    this.showChange.emit(this.show);
  }
}
