import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IAuthUrl } from './auth-url';
import { IUser } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _authUrl = environment.apiHost + environment.baseUrl + '/auth';

  constructor(private http: HttpClient) { }

  public isAuthenticated(): boolean {
    const token = this.getToken();

    return (token !== null && token !== undefined);
  }

  public getToken() {
    return localStorage.getItem('token');
  }

  getAuthPage(): Observable<IAuthUrl> {
    return this.http.get<IAuthUrl>(this._authUrl + '/authPage').pipe(
      catchError(this.handleError)
    );
  }

  getAcessToken(auth_code: string) {
    console.log(auth_code)

    interface ProxyResponse {
      access_token: string;
    }
  
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    
    return this.http.post<ProxyResponse>(this._authUrl + '/accessToken', {code: auth_code}, httpOptions).pipe(map((response: ProxyResponse) => {
      localStorage.setItem('token', response.access_token);
    }));
  }

  getUserDetails(): Observable<IUser> {
    return this.http.get<IUser>(this._authUrl + '/userDetails').pipe(
      catchError(this.handleError)
    );
  }

  logout() {
    localStorage.removeItem('token');

    return this.http.get(this._authUrl + '/logout');
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
