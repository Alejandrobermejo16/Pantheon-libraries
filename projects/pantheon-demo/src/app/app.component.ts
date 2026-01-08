import { Component, ViewChild, ViewEncapsulation, NgZone, OnInit } from '@angular/core';
import { PantheonBaseComponent } from 'projects/core/api-base/base.component';
import { WindowComponent } from '../../../pantheon-ui/src/lib/pantheon-windows/window/window.component';
import { STATUS_MAP, TaskInterface } from './shared/constants';
import { PantheonRestService } from 'projects/core/service/pantheon-rest.service';
import { Action } from '../../../pantheon-ui/src/lib/pantheon-windows/SideActionPanel/interface';

declare const google: any; // SDK de Google

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent extends PantheonBaseComponent implements OnInit {
  @ViewChild('modal') modal!: WindowComponent;

  title = 'pantheon-demo';
  showModal = false;
  columns: Array<string> = ['Ready To Start', 'In Progress', 'Ready to verify/Deploy', 'Deployed'];
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

  // Para Google login
  public userEmail = '';
  public userRoles: string[] = [];

  constructor(private restRequestService: PantheonRestService, private ngZone: NgZone) {
    super();
  }

  public ngOnInit(): void {
    super.ngOnInit();
    this.initGoogleLogin();
    this.loadUserFromSession();
  }

  // ---------------- Google Login ----------------
  private initGoogleLogin() {
    google.accounts.id.initialize({
      client_id: '947413339284-tvocei2vmocb3ek286osp0gll3jug4hc.apps.googleusercontent.com',
      callback: (response: any) => this.handleGoogleResponse(response)
    });

    google.accounts.id.renderButton(
      document.getElementById('googleSignInButton'),
      { theme: 'outline', size: 'large' } // Personaliza tu botón
    );

    // google.accounts.id.prompt(); // Desactivado para evitar conflicto con el botón
  }

  private handleGoogleResponse(response: any) {
    const token = response.credential;
    const payload = JSON.parse(atob(token.split('.')[1]));
    const email = payload.email;

    // Guardar email en sesión
    sessionStorage.setItem('userEmail', email);
    this.userEmail = email;

    // Llamar backend para obtener roles
    this.loadRoles(email);
  }

  private async loadRoles(email: string) {
    try {
      const response = await this.restRequestService.post<{ roles: string[] }>('getUserRoles', { email });
      this.userRoles = response.roles || [];
      sessionStorage.setItem('userRoles', JSON.stringify(this.userRoles));
      console.log('Roles cargados:', this.userRoles);
    } catch (err) {
      console.error('Error cargando roles:', err);
    }
  }

  private loadUserFromSession() {
    const email = sessionStorage.getItem('userEmail');
    const roles = sessionStorage.getItem('userRoles');

    if (email) this.userEmail = email;
    if (roles) this.userRoles = JSON.parse(roles);
  }

  public hasRole(role: string): boolean {
    return this.userRoles.includes(role);
  }
  // ---------------- Fin Google Login ----------------

  // ---------------- Resto de tu componente ----------------
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
      if (columnName) columnsMap[columnName].push(task);
    });
    this.dataColumns = Object.keys(columnsMap).map(key => ({ name: key, items: columnsMap[key] }));
  }

  protected onTaskMoved(event: { task: any, fromIndex: number, toIndex: number }) {
    this.restRequestService.patch('updateTaskStatus', {
      taskId: event.task._id,
      status: this.columns[event.toIndex]
    }).then(console.log).catch(console.error);
  }

  private openCreateModal() { this.isMenuOpen = false; this.createTaskWindow = true; }

  handleCreateTask = async () => { await this.createNewTask(); }

  protected async createNewTask(){
    try {
      const newTask = await this.restRequestService.post('createTasks', {
        title: this.taskTitle,
        description: this.taskDescription,
        userEmail: this.userEmail || 'alejandro@gmail.com',
        status: 'Ready To Start'
      });
      console.log('Task created:', newTask);
      this.createTaskWindow = false;
    } catch (error) {
      console.error('Error creating task:', error);
      this.createTaskWindow = false;
    }
  }

  protected openCard(item: TaskInterface): void { this.showModal = true; }

  public clearInput(field: keyof AppComponent): void {
    if (typeof this[field] === 'string') (this[field] as string) = '';
  }

  protected getModule(): string { return 'getTasks'; }
  protected getResource(): string { return ''; }
  protected getRequestMethod(): string { return 'GET'; }
  protected getDefaultBody(): any { return { userEmail: 'juan@correo.com' }; }
}
