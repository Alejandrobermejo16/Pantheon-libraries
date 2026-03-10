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
  @Output() taskMoved = new EventEmitter<{ task: any; fromIndex: number; toIndex: number }>();

  crossOutEnabled = false;
  connectedDropLists: string[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['dataColumns']) {
      this.connectedDropLists = this.dataColumns.map((_, index) => `column-${index}`);
    }
  }

  trackById(_index: number, item: any): string {
    return item?._id ?? item?._id?.$oid ?? _index;
  }

  onTaskDrop(event: CdkDragDrop<any[]>, targetColumnIndex: number) {
    // Capturar la tarea por referencia ANTES de cualquier mutación de arrays
    const movedTask = event.previousContainer.data[event.previousIndex];

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }

    this.taskMoved.emit({
      task: movedTask,
      fromIndex: Number(event.previousContainer.id.split('-')[1]),
      toIndex: targetColumnIndex
    });
  }

}
