import { Component } from '@angular/core';
import { PantheonBaseComponent } from './base.component';

@Component({
    selector: 'app-roles-base',
    templateUrl: './roles.base.component.html',
    styleUrls: ['./roles.base.component.css']
})
export class RolesBaseComponent extends PantheonBaseComponent {
    constructor() {
        super();
    }

    

    protected getModule(): string {
        return 'roles';
    }
    protected getResource(): string {
        return 'roles';
    }
}