import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { GitAuthComponent } from '../components/git-auth/git-auth.component';
import { LoginComponent } from '../components/login/login.component';
import { RedirectComponent } from '../components/shared/redirect/redirect.component';

@NgModule({
  declarations: [
    RedirectComponent,
    // DashboardComponent,
    GitAuthComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
