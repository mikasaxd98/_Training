import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainPageViewComponent } from '../main-page/components/main-page-view/main-page-view.component';
import { ProductPageViewComponent } from './components/product-page-view/product-page-view.component';



const routes: Routes = [
  {
    path: '',
    component: ProductPageViewComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductPageRoutingModule { }
