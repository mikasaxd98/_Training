import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductPageViewComponent } from '../../../user/modules/product-page/components/product-page-view/product-page-view.component';
import { UserNavigationViewComponent } from './components/user-navigation-view/user-navigation-view.component';



const routes: Routes = [
  {
    path: '',
    component: UserNavigationViewComponent,
    children: [
      {
        path: '',
        redirectTo:'main',
        pathMatch: 'full'
      },
      {
        path: 'main',
        loadChildren: ()=> import('../../../user/modules/main-page/main-page.module').then(m=>m.MainPageModule)
      },
      {
        path: 'cart-page',
        loadChildren: ()=> import('../../../user/modules/cart-page/cart-page.module').then(m=>m.CartPageModule)
      },
      {
        path: 'product/:id',
        loadChildren: ()=> import('../../../user/modules/product-page/product-page.module').then(m=>m.ProductPageModule)
      },
      {
        path: 'cart',
        loadChildren: ()=> import('../../../user/modules/cart-page/cart-page.module').then(m=>m.CartPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserNavigationRoutingModule { }
