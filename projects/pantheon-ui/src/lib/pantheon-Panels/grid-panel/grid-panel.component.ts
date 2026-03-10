import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, TemplateRef } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'pantehon-grid-panel',
  templateUrl: './grid-panel.component.html',
  styleUrls: ['./grid-panel.component.scss']
})
export class GridPanelComponent implements OnChanges {

  @Input() dataColumns: Array<{ name: string; items: any[] }> = [];
  @Input() gridTemplateColumns = 'repeat(4, 1fr)';
  @Input() itemTemplate!: TemplateRef<any>;
  @Input() currentUserEmail: string = '';
  @Output() taskMoved = new EventEmitter<{ task: any; fromIndex: number; toIndex: number }>();

  crossOutEnabled = false;
  connectedDropLists: string[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['dataColumns']) {
      this.connectedDropLists = this.dataColumns.map((_, index) => `column-${index}`);
    }
  }

  trackById(_index: number, item: any): string {
    return item?._id ?? _index;
  }

  onTaskDrop(event: CdkDragDrop<any[]>, targetColumnIndex: number) {
    const fromColumnIndex = Number(event.previousContainer.id.split('-')[1]);

    const movedTask = event.item.data;

    // Seguridad: ignorar si la tarea no pertenece al usuario actual
    if (this.currentUserEmail && movedTask?.userEmail !== this.currentUserEmail) {
      return;
    }
    const realIdx = event.previousContainer.data.findIndex(
      (t: any) => t._id === movedTask?._id
    );
    const fromIdx = realIdx >= 0 ? realIdx : event.previousIndex;

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, fromIdx, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        fromIdx,
        event.currentIndex
      );
    }

    this.taskMoved.emit({
      task: movedTask,
      fromIndex: fromColumnIndex,
      toIndex: targetColumnIndex
    });
  }

}
