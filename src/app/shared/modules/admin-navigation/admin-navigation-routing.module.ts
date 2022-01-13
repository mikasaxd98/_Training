import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminNavigationViewComponent } from './components/admin-navigation-view/admin-navigation-view.component';
import { AuthGuard } from '../../guards/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: AdminNavigationViewComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        loadChildren: () => import('../../../admin/modules/admin-login-page/admin-login-page.module').then( m => m.AdminLoginPageModule )
      },
      {
        path: 'add',
        loadChildren: () => import('../../../admin/modules/admin-add-page/admin-add-page.module').then( m => m.AdminAddPageModule ),
        canActivate: [AuthGuard]
      },
      {
        path: 'dashboard',
        loadChildren: () => import('../../../admin/modules/admin-dashboard/admin-dashboard.module').then( m => m.AdminDashboardModule ),
        canActivate: [AuthGuard]
      },
      {
        path: 'product/:id/edit',
        loadChildren: () => import('../../../admin/modules/admin-edit-page/admin-edit-page.module').then( m => m.AdminEditPageModule ),
        canActivate: [AuthGuard]
      }
    ]
  }
];

@NgModule( {
  imports: [RouterModule.forChild( routes )],
  exports: [RouterModule]
} )
export class AdminNavigationRoutingModule {
}
