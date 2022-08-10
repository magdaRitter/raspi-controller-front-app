import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ServicesComponent } from '../components/services/services.component';

@NgModule({
  declarations: [
    ServicesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'services', component: ServicesComponent}
    ])
  ]
})
export class ServicesModule { }
