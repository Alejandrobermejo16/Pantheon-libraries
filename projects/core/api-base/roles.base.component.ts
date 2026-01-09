import { Directive } from '@angular/core';
import { PantheonBaseComponent } from './base.component';

@Directive()
export abstract class RolesBaseComponent extends PantheonBaseComponent {
    protected getModule(): string {
        return 'roles';
    }
    protected getResource(): string {
        return 'roles';
    }
}
