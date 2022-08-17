import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { catchError, map, Observable, tap, throwError } from "rxjs";
import { IAlarm } from './alarm';

@Injectable({
  providedIn: 'root'
})
export class AlarmService {
  private alarmsUrl = 'api/alarm/alarms.json';

  constructor(private http: HttpClient) { }

  getAlarms(): Observable<IAlarm[]> {
    return this.http.get<IAlarm[]>(this.alarmsUrl).pipe(
      tap(data => console.log('All: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getAlarm(id: number): Observable<IAlarm | undefined> {
    return this.getAlarms()
      .pipe(
        map((alarms: IAlarm[]) => alarms.find(a => a.id === id))
      );
  }

  addAlarm(alarm: IAlarm) {
    console.log("TODO: Sending add alarm request");
  }

  editAlarm(alarm: IAlarm) {
    console.log("TODO: Sending edit alarm request");
  }

  deleteAlarm(alarmId: number) {
    console.log("TODO: Sending delete alarm request");
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
