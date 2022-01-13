import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPageViewComponent } from './components/product-page-view/product-page-view.component';
import { ProductPageContainerComponent } from './components/product-page-container/product-page-container.component';
import { ProductPageRoutingModule } from './product-page-routing.module';
import { QuillModule } from 'ngx-quill';



@NgModule({
  declarations: [
    ProductPageViewComponent,
    ProductPageContainerComponent
  ],
  imports: [
    CommonModule,
    ProductPageRoutingModule,
    QuillModule.forRoot()
  ]
})
export class ProductPageModule { }
