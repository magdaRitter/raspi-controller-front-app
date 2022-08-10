import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IStation } from 'src/app/services/radio/station';
import { StationsService } from 'src/app/services/radio/stations.service';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent implements OnInit, OnDestroy {
  sub!: Subscription;
  errorMessage: string = "";
  stations: IStation[] = [];

  constructor(private stationsService: StationsService) { }

  ngOnInit(): void {
    this.sub = this.stationsService.getStations().subscribe({
      next: stations => {
        this.stations = stations;
      },
      error: err => this.errorMessage = err
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  showClick(){
    console.log("clicked")
  }
}
