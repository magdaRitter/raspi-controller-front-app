import { NgModule } from '@angular/core';
import { AlarmModule } from './alarm.module';
import { RadioModule } from './radio.module';
import { ServicesModule } from './services.module';
import { SystemModule } from './system.module';

@NgModule({
  declarations: [],
  imports: [
    AlarmModule,
    RadioModule, 
    ServicesModule,
    SystemModule
  ]
})
export class AppRoutingModule { }
