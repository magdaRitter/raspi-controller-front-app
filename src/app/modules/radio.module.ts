import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RadioComponent } from '../components/radio/radio.component';

@NgModule({
  declarations: [
    RadioComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'radio', component: RadioComponent}
    ])
  ]
})
export class RadioModule { }
