import { Component, OnChanges, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from '../../../../../shared/services/product.service';
import { tap } from 'rxjs/operators';
import { GetProductModel } from '../../../../../shared/classes/get-product-model';

@Component( {
  selector: 'app-main-page-container',
  templateUrl: './main-page-container.component.html',
  styleUrls: ['./main-page-container.component.scss']
} )
export class MainPageContainerComponent implements OnInit {

  public products$ = new Observable<GetProductModel[]>();

  constructor( public _productService: ProductService ) {
  }

  ngOnInit(): void {
    this.products$ = this._productService.getAll();
  }

}
