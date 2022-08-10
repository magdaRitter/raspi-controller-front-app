import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { catchError, map, Observable, tap, throwError } from "rxjs";
import { IStation } from './station';


@Injectable({
  providedIn: 'root'
})
export class StationsService {
  private stationsUrl = 'api/radio/stations.json';

  constructor(private http: HttpClient){}

  getStations(): Observable<IStation[]> {
    return this.http.get<IStation[]>(this.stationsUrl).pipe(
      tap(data => console.log('All: ', JSON.stringify(data))),
      catchError(this.handleError)
  );
  }

  getStation(id: number): Observable<IStation | undefined> {
    return this.getStations()
      .pipe(
        map((products: IStation[]) => products.find(p => p.id === id))
      );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';

    if(err.error instanceof ErrorEvent){
        errorMessage = 'An error occurred: ' + err.error.message;
    } else {
        errorMessage = 'Server returner code: ' + err.status + ', error message is: ' + err.message;
    }
    
    console.log(errorMessage);
    return throwError(() => errorMessage);
}
}
