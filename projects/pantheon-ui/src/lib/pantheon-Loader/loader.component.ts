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
  /** Controls visibility of the modal/backdrop and spinner */
  @Input() show: boolean = false;

  /** Optional text to show under the spinner */
  @Input() text: string | null = 'Cargando...';

  /** Loader variant: 'default' | 'primary' | 'success' | 'warning' | 'danger' */
  @Input() variant: 'default' | 'primary' | 'success' | 'warning' | 'danger' = 'primary';

  /** Loader size: 'sm' | 'md' | 'lg' */
  @Input() size: 'sm' | 'md' | 'lg' = 'md';

  /** Show backdrop blur effect */
  @Input() blur: boolean = true;

  /** Two-way binding helper if you want to update parent when closing internally */
  @Output() showChange = new EventEmitter<boolean>();

  hide() {
    this.show = false;
    this.showChange.emit(this.show);
  }
}
