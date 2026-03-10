import { Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'pantehon-grid-panel',
  templateUrl: './grid-panel.component.html',
  styleUrls: ['./grid-panel.component.scss']
})
export class GridPanelComponent {

  @Input() dataColumns: Array<{ name: string; items: any[] }> = [];
  @Input() gridTemplateColumns = 'repeat(4, 1fr)';
  @Input() itemTemplate!: TemplateRef<any>;
  @Output() taskMoved = new EventEmitter<{ task: any; fromIndex: number; toIndex: number }>();

  crossOutEnabled = false;

  get connectedDropLists(): string[] {
    return this.dataColumns.map((_, index) => `column-${index}`);
  }

  onTaskDrop(event: CdkDragDrop<any[]>, targetColumnIndex: number) {
    let movedTask;

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      movedTask = event.container.data[event.currentIndex];
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      movedTask = event.container.data[event.currentIndex];
    }

    this.taskMoved.emit({
      task: movedTask,
      fromIndex: Number(event.previousContainer.id.split('-')[1]),
      toIndex: targetColumnIndex
    });
  }

}
