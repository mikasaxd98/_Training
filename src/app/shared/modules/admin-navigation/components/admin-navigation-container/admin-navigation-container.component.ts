import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';
import { Router } from '@angular/router';

@Component( {
  selector: 'app-admin-navigation-container',
  templateUrl: './admin-navigation-container.component.html',
  styleUrls: ['./admin-navigation-container.component.scss']
} )
export class AdminNavigationContainerComponent implements OnInit {

  constructor( private _authService: AuthService,
               private router: Router) {
  }

  ngOnInit(): void {
  }

  public logOut( event: Event ) {
    event.preventDefault();
    this._authService.logout();
    this.router.navigate(['/admin', 'login'])
  }

  get isAuthenticated(){
   return  this._authService.isAuthenticated;
  }

}
