import { Component, Input, HostBinding } from '@angular/core';
import { formatDateByType, DateFormatType } from '../utils/date-utils';
import { CdkDrag } from '@angular/cdk/drag-drop';

@Component({
  selector: 'pantehon-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  hostDirectives: [{
    directive: CdkDrag,
    inputs: ['cdkDragData']
  }]
})
export class CardComponent {
  @Input() data!: any;
  @Input() isCompleted = false;
  @Input() cardClass = '';
  @Input() dateType: DateFormatType = 'month';

  get title(): string {
    return this.data?.title || '';
  }

  get description(): string {
    return this.data?.description || '';
  }

  get createdAt(): string {
    return formatDateByType(this.data?.createdAt, this.dateType);
  }

  get iconClass(): string {
    return this.iconClass;
  }
}
