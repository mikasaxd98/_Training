import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../../../shared/services/product.service';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { GetProductModel } from '../../../../../shared/classes/get-product-model';
import { AddProductModel } from '../../../../../shared/classes/add-product-model';
import { takeUntil, tap } from 'rxjs/operators';

@Component( {
  selector: 'app-admin-edit-page-container',
  templateUrl: './admin-edit-page-container.component.html',
  styleUrls: ['./admin-edit-page-container.component.scss']
} )
export class AdminEditPageContainerComponent implements OnInit {

  @Input()
  public routeId$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  public product$: Observable<GetProductModel> = new Observable<GetProductModel>();

  public destroy$: Subject<any> = new Subject<any>();

  public getProductModel: GetProductModel = new GetProductModel();

  public isCheckRequiredFields: boolean = false;

  constructor( private route: ActivatedRoute,
               private router: Router,
               private _productService: ProductService ) {
  }

  ngOnInit(): void {
     this.getProductById();
}

public getProductById(){
   this._productService.getProductById(this.routeId$.value).pipe(
     takeUntil(this.destroy$),
     tap((res: GetProductModel) => this.getProductModel = Object.assign({}, res))
   ).subscribe()
  }

  public isInvalid() {
    return !this.getProductModel.type || !this.getProductModel.name || !this.getProductModel.price
      || !this.getProductModel.photo
  }

  public submit( event: Event ) {
    this.isCheckRequiredFields = true;
    event.preventDefault();

    if ( !this.isInvalid() ) {
      let currentDate = new Date();
      const product = Object.assign({}, this.getProductModel, {date: currentDate})
      this._productService.update(product).pipe(
        tap(()=>this.router.navigate(['/admin', 'dashboard']))
      ).subscribe()
    }
  }
}
