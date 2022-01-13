import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminLoginPageContainerComponent } from './components/admin-login-page-container/admin-login-page-container.component';
import { AdminLoginPageViewComponent } from './components/admin-login-page-view/admin-login-page-view.component';
import { AdminLoginPageRoutingModule } from './admin-login-page-routing.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AdminLoginPageContainerComponent,
    AdminLoginPageViewComponent,
  ],
  imports: [
    CommonModule,
    AdminLoginPageRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AdminLoginPageModule { }
