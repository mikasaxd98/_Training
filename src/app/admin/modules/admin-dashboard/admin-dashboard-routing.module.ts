import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginPageViewComponent } from '../admin-login-page/components/admin-login-page-view/admin-login-page-view.component';
import { AdminDashboardViewComponent } from './components/admin-dashboard-view/admin-dashboard-view.component';


const routes: Routes = [
  {
    path: '',
    component: AdminDashboardViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDashboardRoutingModule { }
