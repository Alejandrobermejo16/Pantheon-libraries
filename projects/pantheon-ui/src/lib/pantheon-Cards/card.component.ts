import { Component, Input } from '@angular/core';
import { formatDateToString } from '../../../../core/utils/utils';

@Component({
  selector: 'pantehon-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  
  @Input() cardClass = '';
  @Input() isCompleted = false;
  @Input() title = '';
  @Input() description = '';
  @Input() createdAt = '';

  ngOnInit() {
    if (this.createdAt) {
      this.createdAt = formatDateToString(new Date(this.createdAt));
    }
  }
  
}
