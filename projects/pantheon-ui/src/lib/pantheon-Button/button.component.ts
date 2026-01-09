import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pantheon-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button 
      [class]="'pantheon-btn ' + (variant || 'primary')"
      (click)="onClick.emit($event)"
      [disabled]="disabled">
      {{ label }}
    </button>
  `,
  styles: [`
    .pantheon-btn {
      padding: 10px 20px;
      font-size: 14px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-weight: 500;
      transition: all 0.3s ease;
    }

    .pantheon-btn.primary {
      background-color: #007bff;
      color: white;
    }

    .pantheon-btn.primary:hover:not(:disabled) {
      background-color: #0056b3;
    }

    .pantheon-btn.secondary {
      background-color: #6c757d;
      color: white;
    }

    .pantheon-btn.secondary:hover:not(:disabled) {
      background-color: #545b62;
    }

    .pantheon-btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `]
})
export class ButtonComponent {
  @Input() label: string = 'Button';
  @Input() variant: 'primary' | 'secondary' = 'primary';
  @Input() disabled: boolean = false;
  @Output() onClick = new EventEmitter<MouseEvent>();
}
