import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, catchError, map, throwError } from 'rxjs';
import { IStation } from './station';

@Injectable({
  providedIn: 'root'
})
export class RadioService {
  private stationsUrl = 'api/radio/stations.json';

  constructor(private http: HttpClient) { }

  getStations(): Observable<IStation[]> {
    return this.http.get<IStation[]>(this.stationsUrl).pipe(
      tap(data => console.log('All: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getStation(id: number): Observable<IStation | undefined> {
    return this.getStations()
      .pipe(
        map((stations: IStation[]) => stations.find(s => s.id === id))
      );
  }

  startRadio(station: IStation) {
    console.log("TODO: Sending start request for: " + station.name);
  }

  stopRadio() {
    console.log("TODO: Sending stop request");
  }

  setVolume(volumeValue: number) {
    console.log("TODO: Sending set volume request");
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
