import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SystemComponent } from '../components/system/system.component';

@NgModule({
  declarations: [
    SystemComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'system', component: SystemComponent}
    ])
  ]
})
export class SystemModule { }
