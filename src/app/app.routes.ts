/**
 * Created by dell on 2018/7/18.
 */
import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component'
import { BusinessMonitorComponent } from './components/business-monitor/business-monitor.component'

export const routes:Routes=[

  {
    path:'',
    redirectTo:'/dashboard',
    pathMatch:'full'
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'business-monitor',
    component:BusinessMonitorComponent
  }

];

