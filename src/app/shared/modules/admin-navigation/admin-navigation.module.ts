import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminNavigationViewComponent } from './components/admin-navigation-view/admin-navigation-view.component';
import { AdminNavigationContainerComponent } from './components/admin-navigation-container/admin-navigation-container.component';
import { AdminNavigationRoutingModule } from './admin-navigation-routing.module';



@NgModule({
  declarations: [
    AdminNavigationViewComponent,
    AdminNavigationContainerComponent
  ],
  imports: [
    CommonModule,
    AdminNavigationRoutingModule
  ]
})
export class AdminNavigationModule { }
