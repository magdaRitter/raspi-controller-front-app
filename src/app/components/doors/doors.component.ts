import { Component, OnInit } from '@angular/core';
import { DoorsService } from 'src/app/services/raspi/doors.service';

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

  constructor(private doorsService: DoorsService) { }

  ngOnInit(): void {
  }

  requestGarage() {
    this.doorsService.requestGarage();
  }

  requestGate() {
    this.doorsService.requestGate();
  }

  requestBoth() {
    this.doorsService.requestBoth();
  }
}
