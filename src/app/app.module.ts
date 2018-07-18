import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { routes } from './app.routes'
import { DashboardComponent } from './components/dashboard/dashboard.component'
import { BusinessMonitorComponent } from './components/business-monitor/business-monitor.component';
import { CardLightComponent } from './core/components/card-light/card-light.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BusinessMonitorComponent,
    CardLightComponent,
    ModalComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[ModalComponent]
})
export class AppModule { }
