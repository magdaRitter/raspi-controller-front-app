import { Component, OnInit } from '@angular/core';
import { RaspiService } from 'src/app/services/raspi/raspi.service';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.css']
})
export class SystemComponent implements OnInit {
  gandalfIcon = "assets/gandalf.png";
  restartIcon = "assets/system/restart.png";
  shutdownIcon = "assets/system/shutdown.png";

  constructor(private raspiService: RaspiService) { }

  ngOnInit(): void {
  }

  restartSystem(){
    this.raspiService.restartSystem();
  }

  shutdownSystem(){
    this.raspiService.shutdownSystem();
  }
}
