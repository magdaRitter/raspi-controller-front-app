import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ToastService } from '../toast/toast.service';

@Injectable({
  providedIn: 'root'
})
export class DoorsService {
  private _doorsUrl = environment.apiHost + environment.baseUrl + '/doors';

  constructor(private http: HttpClient, private toastService: ToastService) { }

  requestGarage() {
    return this.http.get(this._doorsUrl + '/garage').subscribe(
      {
        next: data => this.toastService.showSuccessToast("Garage signal was fired"),
        error: err => this.handleError(err)
      });
  }

  requestGate() {
    return this.http.get(this._doorsUrl + '/gate').subscribe(
      {
        next: data => this.toastService.showSuccessToast("Gate signal was fired"),
        error: err => this.handleError(err)
      });
  }

  requestBoth() {
    return this.http.get(this._doorsUrl + '/both').subscribe(
      {
        next: data => this.toastService.showSuccessToast("Both signals were fired"),
        error: err => this.handleError(err)
      });
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';

    if (err.error instanceof ErrorEvent) {
      errorMessage = 'An error occurred: ' + err.error.message;
    } else {
      errorMessage = 'Server returner code: ' + err.status + ', error message is: ' + err.message;
    }

    this.toastService.showErrorToast( errorMessage);
  }
}
