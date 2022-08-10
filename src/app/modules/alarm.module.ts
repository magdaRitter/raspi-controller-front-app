import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AlarmComponent } from 'src/app/components/alarm/alarm.component';

@NgModule({
  declarations: [
    AlarmComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'alarm', component: AlarmComponent}
    ])
  ]
})
export class AlarmModule { }
