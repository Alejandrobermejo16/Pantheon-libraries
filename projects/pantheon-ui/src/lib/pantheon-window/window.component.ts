import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ModalSize, ModalVariant, ICONS } from './constants';

@Component({
  selector: 'pantehon-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.scss']
})
export class WindowComponent {
  @Input() size: ModalSize = 'md';
  @Input() variant: ModalVariant = 'default';
  @Input() show: boolean = false;
  @Input() titleBtnClose: string = 'Volver';
  @Input() titleBtnNext: string = '';

  @Input() onAction: () => void = () => {};
  @Output() showChange = new EventEmitter<boolean>();

  get icon(): string {
    return ICONS[this.variant];
  }

  close(): void {
    this.show = false;
    this.showChange.emit(this.show);
  }
}
