import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartPageViewComponent } from './components/cart-page-view/cart-page-view.component';
import { CartPageContainerComponent } from './components/cart-page-container/cart-page-container.component';
import { CartPageRoutingModule } from './cart-page-routing.module';



@NgModule({
  declarations: [
    CartPageViewComponent,
    CartPageContainerComponent
  ],
  imports: [
    CommonModule,
    CartPageRoutingModule
  ]
})
export class CartPageModule { }
