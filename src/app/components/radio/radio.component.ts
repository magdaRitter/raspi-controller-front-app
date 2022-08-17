import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RadioService } from 'src/app/services/raspi/radio.service';
import { IStation } from 'src/app/services/raspi/station';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent implements OnInit, OnDestroy {
  startIcon = "assets/radio/play.png";
  stopIcon = "assets/radio/pause.png";
  sub!: Subscription;
  errorMessage: string = "";
  stations: IStation[] = [];
  activeStation!: IStation;
  stopped = true;
  volumeValue = 0;

  constructor(private radioService: RadioService) { }

  ngOnInit(): void {
    this.sub = this.radioService.getStations().subscribe({
      next: stations => {
        this.stations = stations;
        this.activeStation = stations[0]!;
      },
      error: err => this.errorMessage = err
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  updateActiveStation(station: IStation) {
    this.activeStation = station;
  }

  startRadio() {
    this.radioService.startRadio(this.activeStation);
  }

  stopRadio() {
    this.radioService.stopRadio();
  }

  updateVolume(value: string) {
    this.volumeValue = Number(value);
    this.radioService.setVolume(this.volumeValue);
  }
}
