import { NgModule } from '@angular/core';
import { AlarmModule } from './alarm.module';
import { DoorsModule } from './doors.module';
import { RadioModule } from './radio.module';
import { SystemModule } from './system.module';

@NgModule({
  declarations: [],
  imports: [
    AlarmModule,
    DoorsModule,
    RadioModule, 
    SystemModule,
  ]
})
export class AppRoutingModule { }
