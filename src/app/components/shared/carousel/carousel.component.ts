import { Component, Input, OnInit } from '@angular/core';
import { IStation } from 'src/app/services/radio/station';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  @Input() stations: IStation[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
