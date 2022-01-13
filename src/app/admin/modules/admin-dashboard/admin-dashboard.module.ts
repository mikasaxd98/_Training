import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardViewComponent } from './components/admin-dashboard-view/admin-dashboard-view.component';
import { AdminDashboardContainerComponent } from './components/admin-dashboard-container/admin-dashboard-container.component';
import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../../../shared/pipes/search.pipe';



@NgModule({
  declarations: [
    AdminDashboardViewComponent,
    AdminDashboardContainerComponent,
    SearchPipe
  ],
  imports: [
    CommonModule,
    AdminDashboardRoutingModule,
    FormsModule,
  ]
})
export class AdminDashboardModule { }
