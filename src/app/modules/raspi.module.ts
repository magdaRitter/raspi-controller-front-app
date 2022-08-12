import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AlarmComponent } from '../components/alarm/alarm.component';
import { DoorsComponent } from '../components/doors/doors.component';
import { RadioComponent } from '../components/radio/radio.component';
import { SystemComponent } from '../components/system/system.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { NavbarComponent } from '../components/shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AlarmComponent,
    DashboardComponent,
    DoorsComponent,
    NavbarComponent,
    RadioComponent,
    SystemComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
})
export class RaspiModule { }
