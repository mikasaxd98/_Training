import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: ()=> import('./shared/modules/user-navigation/user-navigation.module').then(m=>m.UserNavigationModule)
  },
  {
    path: 'admin',
    loadChildren: ()=> import('./shared/modules/admin-navigation/admin-navigation.module').then(m=>m.AdminNavigationModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
