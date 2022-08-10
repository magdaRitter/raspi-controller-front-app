import { Injectable } from '@angular/core';
import { IAlarm } from '../alarm/alarm';
import { IStation } from '../stations/station';

@Injectable({
  providedIn: 'root'
})
export class RaspiService {

  constructor() { }

  requestGarage() {
    console.log("Sending request for garage doors");
  }

  requestGate() {
    console.log("Sending request for gate doors");
  }

  requestBoth() {
    console.log("Sending request for both doors");
  }

  startRadio(station: IStation) {
    console.log("Sending start request for: " + station.name);
  }

  stopRadio() {
    console.log("Sending stop request");
  }

  setVolume(volumeValue: number) {
    console.log("Sending set volume request");
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

  restartSystem() {
    console.log("Sending restart system request");
  }

  shutdownSystem() {
    console.log("Sending shut down system request");
  }
}
