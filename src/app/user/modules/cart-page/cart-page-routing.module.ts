import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CartPageViewComponent } from './components/cart-page-view/cart-page-view.component';


const routes: Routes = [
  {
    path: '',
    component: CartPageViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CartPageRoutingModule { }
