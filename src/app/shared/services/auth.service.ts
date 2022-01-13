import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { AuthModel } from '../classes/auth-model';
import { AuthLoginModel } from '../classes/auth-login-model';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable( {
  providedIn: 'root'
} )
export class AuthService {

  constructor( private _http: HttpClient ) {
  }

  public login( user: AuthLoginModel ): Observable<AuthLoginModel> {
    return this._http.post<AuthLoginModel>( `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`, user )
      .pipe(
        tap( res => this.setToken( res ) )
      )
  }

  private setToken( res: any ) {
    if ( res ) {
      const expData = new Date( new Date().getTime() + +res.expiresIn * 1000 );
      localStorage.setItem( 'fb-token-exp', expData.toString() );
      localStorage.setItem( 'fb-token', res.idToken );
    }
    else {
      localStorage.clear()
    }

  }

  get token() {
    const date =  localStorage.getItem( 'fb-token-exp' );
    const expData: any = new Date( !!date ?  date : new Date().getTime());

    if( new Date > expData) {
      this.logout();
      return null;
    }
    else{
      return localStorage.getItem('fb-token');
    }
  }

  public logout(){
    this.setToken(null);
  }

  get isAuthenticated(){
    return !!this.token
  }
}
