import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { EventTypes } from './event-types';
import { ToastEvent } from './toast-event';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  toastEvents: Observable<ToastEvent>;
  private _toastEvents = new Subject<ToastEvent>();

  constructor() {
    this.toastEvents = this._toastEvents.asObservable();
  }

  showSuccessToast(message: string) {
    this._toastEvents.next({
      message,
      title: "Success",
      type: EventTypes.Success,
    });
  }

  showInfoToast(message: string) {
    this._toastEvents.next({
      message,
      title: "Info",
      type: EventTypes.Info,
    });
  }

  showWarningToast(message: string) {
    this._toastEvents.next({
      message,
      title: "Warning",
      type: EventTypes.Warning,
    });
  }

  showErrorToast(message: string) {
    this._toastEvents.next({
      message,
      title: "Error",
      type: EventTypes.Error,
    });
  }
}