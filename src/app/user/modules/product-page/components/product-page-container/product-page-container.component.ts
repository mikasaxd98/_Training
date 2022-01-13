import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../../../shared/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { GetProductModel } from '../../../../../shared/classes/get-product-model';

@Component( {
  selector: 'app-product-page-container',
  templateUrl: './product-page-container.component.html',
  styleUrls: ['./product-page-container.component.scss']
} )
export class ProductPageContainerComponent implements OnInit {

  public product$ = new Observable<GetProductModel>();

  constructor( private _productService: ProductService,
               private route: ActivatedRoute ) {
  }

  ngOnInit(): void {
    this.subscribeRoute$();
  }

  private subscribeRoute$() {
    this.route.params.pipe(
      tap( res => this.getProductById(res['id']) )
    ).subscribe();

  }

  public getProductById(id: string){
   this.product$ = this._productService.getProductById(id);
  }

}
