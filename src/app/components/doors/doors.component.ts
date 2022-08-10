import { Component, OnInit } from '@angular/core';
import { RaspiService } from 'src/app/services/raspi/raspi.service';

@Component({
  selector: 'app-doors',
  templateUrl: './doors.component.html',
  styleUrls: ['./doors.component.css']
})
export class DoorsComponent implements OnInit {
  gandalfIcon = "assets/gandalf.png";
  garageIcon = "assets/doors/garage.png";
  gateIcon = "assets/doors/gate.png";
  allIcon = "assets/doors/all.png";

  constructor(private raspiService: RaspiService) { }

  ngOnInit(): void {
  }

  requestGarage() {
    this.raspiService.requestGarage();
  }

  requestGate() {
    this.raspiService.requestGate();
  }

  requestBoth() {
    this.raspiService.requestBoth();
  }

  openBoth() {

  }

}
