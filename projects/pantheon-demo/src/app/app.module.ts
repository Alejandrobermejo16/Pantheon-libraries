import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridPanelModule } from '../../../pantheon-ui/src/lib/pantheon-Panels/grid-panel/grid-panel.module';
import { CardModule } from '../../../pantheon-ui/src/lib/pantheon-Cards/card.module';
import { WindowModule } from 'projects/pantheon-ui/src/lib/pantheon-windows/window/window.module';
import { GridPanelHeaderModule } from '../../../pantheon-ui/src/lib/pantheon-Panels/grid-panel/grid-pannel-header/grid-panel-header.module';
import { SideActionPanelModule } from '../../../pantheon-ui/src/lib/pantheon-windows/SideActionPanel/side-action-panel.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    GridPanelModule,
    CardModule,
    WindowModule,
    GridPanelHeaderModule,
    HttpClientModule,
    SideActionPanelModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
