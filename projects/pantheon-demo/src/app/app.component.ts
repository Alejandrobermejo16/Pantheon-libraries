import { Component, ViewChild } from '@angular/core';
import { PantheonBaseComponent } from 'projects/core/service/api-base/base.component';
import { WindowComponent } from '../../../pantheon-ui/src/lib/pantheon-window/window.component';
import { STATUS_MAP, TaskInterface } from './shared/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends PantheonBaseComponent {
  @ViewChild('modal') modal!: WindowComponent;

  title = 'pantheon-demo';
  showModal = false;
  columns: Array<String> = ['Ready To Start', 'In Progress', 'Ready to verify/Deploy', 'Deployed'];
  dataColumns: Array<{ name: string; items: TaskInterface[] }> = [];

  public ngOnInit(): void {
    super.ngOnInit();
  }

  protected dataAfterRequest(data: any): void {
    if (!data?.tasks) return;

    const columnsMap: Record<string, TaskInterface[]> = {
      'Ready To Start': [],
      'In Progress': [],
      'Ready to verify/Deploy': [],
      'Deployed': []
    };

    data.tasks.forEach((task: TaskInterface) => {
      const columnName = STATUS_MAP[task.status];
      if (columnName) {
        columnsMap[columnName].push(task);
      }
    });

    this.dataColumns = Object.keys(columnsMap).map(key => ({
      name: key,
      items: columnsMap[key]
    }));
  }


  protected openCard(item: TaskInterface): void {
    this.showModal = true;
  }

  protected getModule(): string {
    return 'getTasks';
  }

  protected getResource(): string {
    return '';
  }

  protected getRequestMethod(): string {
    return 'GET';
  }

  protected getDefaultBody(): any {
    return { userEmail: 'juan@correo.com' };
  }
}
