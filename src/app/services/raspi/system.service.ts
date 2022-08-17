import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  constructor() { }

  restartSystem() {
    console.log("TODO: Sending restart system request");
  }

  shutdownSystem() {
    console.log("TODO: Sending shut down system request");
  }
}
