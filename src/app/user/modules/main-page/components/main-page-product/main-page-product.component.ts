import { Component, Input, OnInit } from '@angular/core';
import { GetProductModel } from '../../../../../shared/classes/get-product-model';
import { QuillEditorComponent } from 'ngx-quill';

@Component( {
  selector: 'app-main-page-product',
  templateUrl: './main-page-product.component.html',
  styleUrls: ['./main-page-product.component.scss']
} )
export class MainPageProductComponent implements OnInit {

  @Input()
  product: GetProductModel = Object.assign({}, new GetProductModel());

  constructor() {
  }

  ngOnInit(): void {
  }

}
