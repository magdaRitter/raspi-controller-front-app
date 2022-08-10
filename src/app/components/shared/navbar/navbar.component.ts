import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  appTitleLbl: string = "Raspi Controller";
  doorsLbl: string = "Doors";
  radioLbl: string = "Radio";
  alarmLbl: string = "Alarm";
  systemLbl: string = "System";
  logoUrl: string = "assets/raspi.png";
  
  constructor() { }

  ngOnInit(): void {
  }

}
