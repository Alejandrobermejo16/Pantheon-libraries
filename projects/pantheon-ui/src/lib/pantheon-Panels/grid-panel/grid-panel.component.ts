import { Component, Input, QueryList, ViewChildren, AfterViewInit, TemplateRef } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDropList } from '@angular/cdk/drag-drop';

@Component({
  selector: 'pantehon-grid-panel',
  templateUrl: './grid-panel.component.html',
  styleUrls: ['./grid-panel.component.scss']
})
export class GridPanelComponent implements AfterViewInit {

  @ViewChildren(CdkDropList) dropLists!: QueryList<CdkDropList>;

  @Input() dataColumns: Array<{ name: string; items: any[] }> = [];
  @Input() gridTemplateColumns = 'repeat(4, 1fr)';
  @Input() itemTemplate!: TemplateRef<any>;

  connectedDropLists: string[] = [];
  crossOutEnabled = false;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.connectedDropLists = this.dropLists.map(list => list.id);
    });
  }

  onTaskDrop(event: CdkDragDrop<any[]>, targetColumnIndex: number) {
    if (event.container.id === 'column-3' || event.previousContainer.id === 'column-3') {
      this.crossOutEnabled = true;
    }

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
  }
}
