import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../../../../../shared/services/product.service';
import { takeUntil, tap } from 'rxjs/operators';
import { GetProductModel } from '../../../../../shared/classes/get-product-model';
import { Observable, Subject } from 'rxjs';

@Component( {
  selector: 'app-admin-dashboard-container',
  templateUrl: './admin-dashboard-container.component.html',
  styleUrls: ['./admin-dashboard-container.component.scss']
} )
export class AdminDashboardContainerComponent implements OnInit, OnDestroy {

  public products: GetProductModel[] = [];

  private _destroy$: Subject<any> = new Subject<any>();

  public productName: string = '';

  constructor( private _productService: ProductService ) {
  }

  ngOnInit(): void {
    this.getProducts();
  }

  ngOnDestroy(){
    this._destroy$.next();
    this._destroy$.complete();

  }

  private getProducts(){
    this._productService.getAll().pipe(
      takeUntil(this._destroy$),
      tap((res: GetProductModel[])=> this.products = res )
    ).subscribe()
  }

  public remove(id: string = ''){
    this._productService.remove(id).pipe(
      takeUntil(this._destroy$),
      tap(()=>this.products = this.products.filter(item=>item.id !== id))
    ).subscribe()
  }

}
