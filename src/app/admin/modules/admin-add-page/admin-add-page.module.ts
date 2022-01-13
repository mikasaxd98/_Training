import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminAddPageContainerComponent } from './components/admin-add-page-container/admin-add-page-container.component';
import { AdminAddPageViewComponent } from './components/admin-add-page-view/admin-add-page-view.component';
import { AdminAddPageRoutingModule } from './admin-add-page-routing.module';
import { FormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';



@NgModule({
  declarations: [
    AdminAddPageContainerComponent,
    AdminAddPageViewComponent,

  ],
  imports: [
    CommonModule,
    AdminAddPageRoutingModule,
    FormsModule,
    QuillModule.forRoot()
  ]
})
export class AdminAddPageModule { }
