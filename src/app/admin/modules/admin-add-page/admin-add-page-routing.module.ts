import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginPageViewComponent } from '../admin-login-page/components/admin-login-page-view/admin-login-page-view.component';
import { AdminAddPageViewComponent } from './components/admin-add-page-view/admin-add-page-view.component';


const routes: Routes = [
  {
    path: '',
    component: AdminAddPageViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminAddPageRoutingModule { }
