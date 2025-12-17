import { Component, OnInit, QueryList, ViewChildren, AfterViewInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDropList } from '@angular/cdk/drag-drop';
import { PantheonBaseComponent } from '../../../../../core/service/api-base/base.component';

@Component({
  selector: 'pantehon-grid-panel',
  templateUrl: './grid-panel.component.html',
  styleUrls: ['./grid-panel.component.scss']
})
export class GridPanelComponent extends PantheonBaseComponent implements OnInit, AfterViewInit {

  @ViewChildren(CdkDropList) dropLists!: QueryList<CdkDropList>;

  gridTemplateColumns = 'repeat(4, 1fr)';
  connectedDropLists: string[] = [];

  columns: Array<{ name: string; tasks: any[] }> = [
    { name: 'Ready To Start', tasks: [] },
    { name: 'In Progress', tasks: [] },
    { name: 'Ready to verify/Deploy', tasks: [] },
    { name: 'Deployed', tasks: [] }
  ];

  crossOutEnabled = false;

  ngOnInit(): void {
    super.ngOnInit();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.connectedDropLists = this.dropLists.map(list => list.id);
    });
  }

  protected onDataLoaded(data: any) {
    if (data?.tasks) {
      this.columns[0].tasks = data.tasks;
    }
  }

  protected onTaskDrop(event: CdkDragDrop<any[]>, targetColumnIndex: number) {
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

  protected getModule(): string { return 'getTasks'; }
  protected getResource(): string { return ''; }
  protected getRequestMethod(): string { return 'GET'; }

  protected getDefaultBody(): any {
    return { userEmail: 'juan@correo.com' };
  }
}
