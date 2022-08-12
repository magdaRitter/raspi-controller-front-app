import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IAuthUrl } from './auth-url';
import { IUser } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isLoggedIn = false;

  constructor(private http: HttpClient) { }

  getAuthPage(): Observable<IAuthUrl> {
    return this.http.get<IAuthUrl>(environment.baseUrl + '/authPage').pipe(
      tap(data => 
        {
          console.log("Received auth page : " + data);
        }),
      catchError(this.handleError)
    );
  }

  getAcessToken(auth_code: string) {
    this._isLoggedIn = true;

    return this.http.post(environment.baseUrl + '/accessToken', { code: auth_code });
  }

  getUserDetails(): Observable<IUser> {
    return this.http.get<IUser>(environment.baseUrl + '/userDetails').pipe(
      catchError(this.handleError)
    );
  }

  logout() {
    this._isLoggedIn = false;

    return this.http.get(environment.baseUrl + '/logout');
  }

  isLoggedIn(){
    return this._isLoggedIn;
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
