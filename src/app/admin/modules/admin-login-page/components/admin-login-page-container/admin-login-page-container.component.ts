import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../../shared/services/auth.service';
import { Router } from '@angular/router';
import { AuthLoginModel } from '../../../../../shared/classes/auth-login-model';
import { tap } from 'rxjs/operators';

@Component( {
  selector: 'app-admin-login-page-container',
  templateUrl: './admin-login-page-container.component.html',
  styleUrls: ['./admin-login-page-container.component.scss']
} )
export class AdminLoginPageContainerComponent implements OnInit {

  public isCheckRequiredFields: boolean = false;

  public submitted: boolean = false;

  public authLoginModel: AuthLoginModel = new AuthLoginModel();

  constructor( private _authService: AuthService,
               private router: Router ) {
  }

  ngOnInit(): void {
  }

  public submit( event: Event ) {
    this.isCheckRequiredFields = true;
    event.preventDefault();

    if ( !this.isInvalid() ) {
      const user = {
        email: this.authLoginModel.email,
        password:this.authLoginModel.password,
        returnSecureToken: true
      }
      this._authService.login( user ).pipe(
        tap( res => console.log( res ) ),
        tap( () => this.router.navigate( ['/admin', 'dashboard'] ) ),
        tap( () => this.submitted = false )
      ).subscribe()
    }
  }

  public isInvalid() {
    return !this.validateEmail( this.authLoginModel.email ) || this.authLoginModel.password.length < 4
  }

  public validateEmail( email: string ) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test( email );
  }

}
