import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridPanelModule } from '../../../pantheon-ui/src/lib/pantheon-Panels/grid-panel/grid-panel.module';
import { CardModule } from '../../../pantheon-ui/src/lib/pantheon-Cards/card.module';
import { WindowModule } from 'projects/pantheon-ui/src/lib/pantheon-windows/window/window.module';
import { GridPanelHeaderModule } from '../../../pantheon-ui/src/lib/pantheon-Panels/grid-panel/grid-pannel-header/grid-panel-header.module';
import { SideActionPanelModule } from '../../../pantheon-ui/src/lib/pantheon-windows/SideActionPanel/side-action-panel.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GridPanelModule,
    CardModule,
    WindowModule,
    GridPanelHeaderModule,
    HttpClientModule,
    SideActionPanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
