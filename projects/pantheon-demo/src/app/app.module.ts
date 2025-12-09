import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridPanelModule } from '../../../pantheon-ui/src/lib/pantheon-Panels/grid-panel/grid-panel.module';
import { CardModule } from '../../../pantheon-ui/src/lib/pantheon-Cards/card.module';
import { GridPanelHeaderComponent } from '../../../pantheon-ui/src/lib/pantheon-Panels/grid-panel/grid-pannel-header/grid-panel-header.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GridPanelModule,
    CardModule,
    GridPanelHeaderComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
