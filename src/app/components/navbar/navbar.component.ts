import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  appTitleLbl: string = "Radio Remote";
  radioLbl: string = "Radio";
  alarmLbl: string = "Alarm";
  systemLbl: string = "System";
  servicesLbl: string = "Services";
  
  constructor() { }

  ngOnInit(): void {
  }

}
