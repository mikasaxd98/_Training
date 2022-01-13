import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

@Component( {
  selector: 'app-admin-edit-page-view',
  templateUrl: './admin-edit-page-view.component.html',
  styleUrls: ['./admin-edit-page-view.component.scss']
} )
export class AdminEditPageViewComponent implements OnInit {

  public routeId$: BehaviorSubject<string> = new BehaviorSubject<string>( '' );

  public destroy$: Subject<any> = new Subject<any>();

  constructor( private route: ActivatedRoute ) {
  }

  ngOnInit(): void {
    this._subscribeRoute();
  }

  private _subscribeRoute() {
    this.route.params.pipe(
      takeUntil( this.destroy$ )
    ).subscribe(
      res => this.routeId$.next( res[ 'id' ] )
    )
  }

}
