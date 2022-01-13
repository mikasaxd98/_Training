import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginPageViewComponent } from '../admin-login-page/components/admin-login-page-view/admin-login-page-view.component';
import { AdminEditPageViewComponent } from './components/admin-edit-page-view/admin-edit-page-view.component';


const routes: Routes = [
  {
    path: '',
    component: AdminEditPageViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminEditPageRoutingModule { }
