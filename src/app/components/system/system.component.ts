import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/services/raspi/system.service';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.css']
})
export class SystemComponent implements OnInit {
  gandalfIcon = "assets/gandalf.png";
  restartIcon = "assets/system/restart.png";
  shutdownIcon = "assets/system/shutdown.png";

  constructor(private systemService: SystemService) { }

  ngOnInit(): void {
  }

  restartSystem() {
    this.systemService.restartSystem();
  }

  shutdownSystem() {
    this.systemService.shutdownSystem();
  }
}
