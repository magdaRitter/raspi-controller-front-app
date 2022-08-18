import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AlarmComponent } from '../components/alarm/alarm.component';
import { DoorsComponent } from '../components/doors/doors.component';
import { RadioComponent } from '../components/radio/radio.component';
import { SystemComponent } from '../components/system/system.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { NavbarComponent } from '../components/shared/navbar/navbar.component';
import { ToasterComponent } from '../components/shared/toaster/toaster.component';
import { ToastComponent } from '../components/shared/toast/toast.component';
import { RedirectComponent } from '../components/shared/redirect/redirect.component';

@NgModule({
  declarations: [
    AlarmComponent,
    DashboardComponent,
    DoorsComponent,
    NavbarComponent,
    RadioComponent,
    SystemComponent,
    ToastComponent,
    ToasterComponent,
    RedirectComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
})
export class RaspiModule { }
