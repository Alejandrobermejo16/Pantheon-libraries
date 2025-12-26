import { Component, Input } from '@angular/core';

@Component({
  selector: 'pantehon-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() data!: any;
  @Input() isCompleted = false;
  @Input() cardClass = '';

  get title(): string {
    return this.data?.title || '';
  }

  get description(): string {
    return this.data?.description || '';
  }

  get createdAt(): string {
    return this.data?.createdAt || '';
  }
}
