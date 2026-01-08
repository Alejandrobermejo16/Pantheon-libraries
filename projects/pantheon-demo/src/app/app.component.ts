import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { PantheonBaseComponent } from 'projects/core/api-base/base.component';
import { WindowComponent } from '../../../pantheon-ui/src/lib/pantheon-windows/window/window.component';
import { STATUS_MAP, TaskInterface } from './shared/constants';
import { PantheonRestService } from 'projects/core/service/pantheon-rest.service';
import { Action } from '../../../pantheon-ui/src/lib/pantheon-windows/SideActionPanel/interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent extends PantheonBaseComponent {
  @ViewChild('modal') modal!: WindowComponent;

  title = 'pantheon-demo';
  showModal = false;
  columns: Array<String> = ['Ready To Start', 'In Progress', 'Ready to verify/Deploy', 'Deployed'];
  dataColumns: Array<{ name: string; items: TaskInterface[] }> = [];
  isMenuOpen = false;
  fieldActions: Action[] = [
      { label: 'Añadir tarea', icon: '➕', type: 'primary', callback: () => this.openCreateModal() },
      { label: 'Editar', icon: '✏️', type: 'default', callback: () => console.log('Editar acción') },
      { label: 'Eliminar', icon: '🗑', type: 'danger', callback: () => console.log('Eliminar acción') }
  ];
  protected createTaskWindow = false;
  public taskTitle = '';
  public taskDescription = '';
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

  private openCreateModal() {
    this.isMenuOpen = false;
    this.createTaskWindow = true;
  }

  handleCreateTask = async () => {
    await this.createNewTask();
  }

  protected async createNewTask(){
    try {
      const newTask = await this.restRequestService.post('createTasks', {
        title: this.taskTitle,
        description: this.taskDescription,
        userEmail: 'alejandro@gmail.com',
        status: 'Ready To Start'
      });
      console.log('Task created:', newTask);
      this.createTaskWindow = false;
    } catch (error) {
      console.error('Error creating task:', error);
      this.createTaskWindow = false;
    }
  }


  protected openCard(item: TaskInterface): void {
    this.showModal = true;
  }

  public clearInput(field: keyof AppComponent): void {
    if (typeof this[field] === 'string') {
      (this[field] as string) = '';
    }
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
