import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  volumeDownIcon = "assets/multimedia/volume_down.png";
  volumeUpIcon = "assets/multimedia/volume_up.png";
  startIcon = "assets/multimedia/play.png";
  stopIcon = "assets/multimedia/pause.png";
  stopped = true;

  constructor() { }

  ngOnInit(): void {
  }

  startStopRadio(){
    this.stopped = !this.stopped;
  }

  volumeDown() {

  }

  volumeUp() {

  }
}
