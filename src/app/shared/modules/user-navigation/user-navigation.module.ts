import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserNavigationRoutingModule } from './user-navigation-routing.module';
import { UserNavigationViewComponent } from './components/user-navigation-view/user-navigation-view.component';
import { UserNavigationContainerComponent } from './components/user-navigation-container/user-navigation-container.component';



@NgModule({
  declarations: [
    UserNavigationViewComponent,
    UserNavigationContainerComponent
  ],
  imports: [
    CommonModule,
    UserNavigationRoutingModule
  ]
})
export class UserNavigationModule { }
