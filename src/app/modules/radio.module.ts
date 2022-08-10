import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RadioComponent } from '../components/radio/radio.component';
import { CarouselComponent } from '../components/shared/carousel/carousel.component';
import { PlayerComponent } from '../components/shared/player/player.component';

@NgModule({
  declarations: [
    RadioComponent,
    CarouselComponent,
    PlayerComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'radio', component: RadioComponent}
    ])
  ]
})
export class RadioModule { }
