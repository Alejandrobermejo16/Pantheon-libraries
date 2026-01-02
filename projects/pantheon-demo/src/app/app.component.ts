import { Component, ViewChild } from '@angular/core';
import { PantheonBaseComponent } from 'projects/core/api-base/base.component';
import { WindowComponent } from '../../../pantheon-ui/src/lib/pantheon-windows/window/window.component';
import { STATUS_MAP, TaskInterface } from './shared/constants';
import { PantheonRestService } from 'projects/core/service/pantheon-rest.service';
import { Action } from '../../../pantheon-ui/src/lib/pantheon-windows/SideActionPanel/interface';

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
  isMenuOpen = false;
  fieldActions: Action[] = [
      { label: 'Añadir tarea', icon: '➕', type: 'primary', callback: () => console.log('Crear acción')  },
      { label: 'Editar', icon: '✏️', type: 'default', callback: () => console.log('Editar acción') },
      { label: 'Eliminar', icon: '🗑', type: 'danger', callback: () => console.log('Eliminar acción') }
  ];
  constructor(private restRequestService: PantheonRestService) {
    super();
  }

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
    const statusKey = task.status?.toLowerCase(); 
    const columnName = STATUS_MAP[statusKey];
    console.log('Mapping task status', task.status, 'to column', columnName);

    if (columnName) {
      columnsMap[columnName].push(task);
    }
  });

  this.dataColumns = Object.keys(columnsMap).map(key => ({
    name: key,
    items: columnsMap[key]
  }));
}


  protected onTaskMoved(event: { task: any, fromIndex: number, toIndex: number }) {
    console.log('Task moved:', event);
    this.restRequestService.patch('updateTaskStatus', {
      taskId: event.task._id,
      status: this.columns[event.toIndex]
    }).then(response => {
      console.log('Task status updated successfully:', response);
    }).catch(error => {
      console.error('Error updating task status:', error);
    });
  }

  protected onExtraMenuClick(event: any): void {
    console.log('Extra menu clicked:', event);
    // Aquí puedes manejar la acción del menú extra
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
