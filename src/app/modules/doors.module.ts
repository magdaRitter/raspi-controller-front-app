import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DoorsComponent } from '../components/doors/doors.component';

@NgModule({
  declarations: [
    DoorsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'doors', component: DoorsComponent}
    ])
  ]
})
export class DoorsModule { }
