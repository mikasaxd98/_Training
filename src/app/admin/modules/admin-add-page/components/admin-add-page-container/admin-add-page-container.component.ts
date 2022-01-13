import { Component, OnInit } from '@angular/core';
import { AddProductModel } from '../../../../../shared/classes/add-product-model';
import { ProductService } from '../../../../../shared/services/product.service';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-add-page-container',
  templateUrl: './admin-add-page-container.component.html',
  styleUrls: ['./admin-add-page-container.component.scss']
})
export class AdminAddPageContainerComponent implements OnInit {

  public addProductModel: AddProductModel = new AddProductModel();

  public isCheckRequiredFields: boolean = false;

  constructor(private _productService: ProductService,
              private router: Router) { }

  ngOnInit(): void {
  }

  public isInvalid() {
    return !this.addProductModel.type || !this.addProductModel.name || !this.addProductModel.price
            || !this.addProductModel.photo
  }

  public submit( event: Event ) {
    this.isCheckRequiredFields = true;
    event.preventDefault();

    if ( !this.isInvalid() ) {
      let currentDate = new Date();
      const product = Object.assign({}, this.addProductModel, {date: currentDate})
      this._productService.create(product).pipe(
        tap(()=>this.router.navigate(['/']))
      ).subscribe()
    }
  }

}
