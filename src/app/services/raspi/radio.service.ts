import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, catchError, map, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ToastService } from '../toast/toast.service';
import { IStation } from './station';

@Injectable({
  providedIn: 'root'
})
export class RadioService {
  private stationsUrl = 'api/radio/stations.json';
  private _radioUrl = environment.apiHost + environment.baseUrl + '/radio';

  constructor(private http: HttpClient, private toastService: ToastService) { }

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
    let params = { "name": station.name, "stream_url": station.streamUrl };
    let queryParams = new HttpParams({ fromObject: params });
    const url = this._radioUrl + "/start";

    return this.http.get(url, { params: queryParams }).subscribe(
      {
        next: data => this.toastService.showSuccessToast("Radio start signal was fired for station: " + station.name),
        error: err => this.handleError(err)
      });
  }

  stopRadio() {
    const url = this._radioUrl + "/stop";

    return this.http.get(url).subscribe(
      {
        next: data => this.toastService.showSuccessToast("Radio stop signal was fired"),
        error: err => this.handleError(err)
      });
  }

  setVolume(volumeValue: number) {
    let params = { "volume": volumeValue };
    let queryParams = new HttpParams({ fromObject: params });
    const url = this._radioUrl + "/volume";

    return this.http.get(url, { params: queryParams }).subscribe(
      {
        next: data => this.toastService.showSuccessToast("Radio volume signal was fired for value: " + volumeValue),
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

    console.log(errorMessage);
    return throwError(() => errorMessage);
  }
}
