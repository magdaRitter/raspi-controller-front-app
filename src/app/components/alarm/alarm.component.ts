import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IAlarm } from 'src/app/services/raspi/alarm';
import { AlarmService } from 'src/app/services/raspi/alarm.service';

@Component({
  selector: 'app-alarm',
  templateUrl: './alarm.component.html',
  styleUrls: ['./alarm.component.css']
})
export class AlarmComponent implements OnInit, OnDestroy {
  sub!: Subscription;
  errorMessage: string = "";
  alarms: IAlarm[] = [];

  constructor(private alarmService: AlarmService) { }

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
    this.alarmService.addAlarm(alarm);
  }

  editAlarm(alarm: IAlarm) {
    this.alarmService.editAlarm(alarm);
  }

  deleteAlarm(alarmId: number) {
    this.alarmService.deleteAlarm(alarmId);
  }
}
