import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DoorsService {

  constructor(private http: HttpClient) { }

  requestGarage() {
    return this.http.get(environment.baseUrl + '/garage').subscribe(
      {
        next: data => console.log("Request to open garage fired"),
        error: err => catchError(this.handleError)
      });
  }

  requestGate() {
    return this.http.get(environment.baseUrl + '/gate').subscribe(
      {
        next: data => console.log("Request to open gate fired"),
        error: err => catchError(this.handleError)
      });
  }

  requestBoth() {
    return this.http.get(environment.baseUrl + '/both').subscribe(
      {
        next: data => console.log("Request to open both fired"),
        error: err => catchError(this.handleError)
      });
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';

    if (err.error instanceof ErrorEvent) {
      errorMessage = 'An error occurred: ' + err.error.message;
    } else {
      errorMessage = 'Server returner code: ' + err.status + ', error message is: ' + err.message;
    }

    console.log(errorMessage);
    return throwError(() => errorMessage);
  }
}
