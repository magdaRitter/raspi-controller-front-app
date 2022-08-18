import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GitAuthComponent } from '../components/git-auth/git-auth.component';
import { LoginComponent } from '../components/login/login.component';

@NgModule({
  declarations: [
    GitAuthComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
