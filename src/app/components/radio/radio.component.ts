import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RaspiService } from 'src/app/services/raspi/raspi.service';
import { IStation } from 'src/app/services/stations/station';
import { StationsService } from 'src/app/services/stations/stations.service';

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

  constructor(private stationsService: StationsService, private raspiService: RaspiService) { }

  ngOnInit(): void {
    this.sub = this.stationsService.getStations().subscribe({
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
    this.raspiService.startRadio(this.activeStation);
  }

  stopRadio() {
    this.raspiService.stopRadio();
  }

  updateVolume(value: string){
    this.volumeValue = Number(value);
    this.raspiService.setVolume(this.volumeValue);
  }
}
