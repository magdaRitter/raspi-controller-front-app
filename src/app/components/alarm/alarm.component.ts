import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IAlarm } from 'src/app/services/alarm/alarm';
import { AlarmService } from 'src/app/services/alarm/alarm.service';
import { RaspiService } from 'src/app/services/raspi/raspi.service';

@Component({
  selector: 'app-alarm',
  templateUrl: './alarm.component.html',
  styleUrls: ['./alarm.component.css']
})
export class AlarmComponent implements OnInit, OnDestroy {
  sub!: Subscription;
  errorMessage: string = "";
  alarms: IAlarm[] = [];

  constructor(private alarmService: AlarmService, private raspiService: RaspiService) { }

  ngOnInit(): void {
    this.sub = this.alarmService.getAlarms().subscribe({
      next: alarms => {
        this.alarms = alarms;
      },
      error: err => this.errorMessage = err
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  addAlarm(alarm: IAlarm) {
    console.log("Sending add alarm request");
  }

  editAlarm(alarm: IAlarm) {
    console.log("Sending edit alarm request");
  }

  deleteAlarm(alarmId: number) {
    console.log("Sending delete alarm request");
  }
}
