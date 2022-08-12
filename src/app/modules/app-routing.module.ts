import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { RedirectComponent } from '../components/shared/redirect/redirect.component';
import { GitAuthComponent } from '../components/git-auth/git-auth.component';
import { ExtUrlResolverService } from '../services/ext-url-resolver/ext-url-resolver.service';
import { AuthModule } from './auth.module';
import { RaspiModule } from './raspi.module';
import { DoorsComponent } from '../components/doors/doors.component';
import { RadioComponent } from '../components/radio/radio.component';
import { AlarmComponent } from '../components/alarm/alarm.component';
import { SystemComponent } from '../components/system/system.component';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'doors',
      },
      { 
        path: 'doors',
        component: DoorsComponent,
      },
      { 
        path: 'radio',
        component: RadioComponent,
      },
      { 
        path: 'alarm',
        component: AlarmComponent,
      },
      { 
        path: 'system',
        component: SystemComponent,
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'redirect',
    component: RedirectComponent
  },
  {
    path: 'authorize',
    component: GitAuthComponent,
    resolve: {
      url: ExtUrlResolverService
    },
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  }
];

@NgModule({
  declarations: [],
  imports: [
    AuthModule,
    RaspiModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
