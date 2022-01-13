import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CartPageViewComponent } from '../../../user/modules/cart-page/components/cart-page-view/cart-page-view.component';
import { AdminLoginPageViewComponent } from './components/admin-login-page-view/admin-login-page-view.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLoginPageViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminLoginPageRoutingModule { }
