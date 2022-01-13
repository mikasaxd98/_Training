import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AutInterceptor implements HttpInterceptor {

  constructor(private _authService: AuthService,
              private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
   if(this._authService.isAuthenticated){
     request = request.clone({
       setParams: {
         auth: !!this._authService.token ? this._authService.token : ''
       }
     })
   }
   return next.handle(request).pipe(
     catchError(err => {
       if (err.status === 401){
         this._authService.logout();
         this.router.navigate(['/admin', 'login'])
       }
      return  throwError(err)
     }))

  }
}
