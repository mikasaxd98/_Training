import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../../services/product.service';
import { Router } from '@angular/router';

@Component( {
  selector: 'app-user-navigation-container',
  templateUrl: './user-navigation-container.component.html',
  styleUrls: ['./user-navigation-container.component.scss']
} )
export class UserNavigationContainerComponent implements OnInit {

  public productTypeName: string = 'Phone';

  constructor( private _productService: ProductService,
               private router: Router ) {
  }

  ngOnInit(): void {
    this.router.navigate(['/'], {queryParams: {}})
  }

  public productType( product: string ) {
    this.productTypeName = product
    if ( !!this.productTypeName && this.productTypeName !== 'Cart' ) {
      this.router.navigate( ['/'], {
        queryParams: {
          productTypeName: this.productTypeName
        },
      } )
    } else if ( !this.productTypeName )
    {
      this.router.navigate( ['/'], {
        queryParams: {}
      })
    }
    this._productService.setProductType( this.productTypeName )
  }

}
