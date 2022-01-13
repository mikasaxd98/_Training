import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminEditPageContainerComponent } from './components/admin-edit-page-container/admin-edit-page-container.component';
import { AdminEditPageViewComponent } from './components/admin-edit-page-view/admin-edit-page-view.component';
import { AdminEditPageRoutingModule } from './admin-edit-page-routing.module';
import { QuillModule } from 'ngx-quill';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AdminEditPageContainerComponent,
    AdminEditPageViewComponent,
  ],
  imports: [
    CommonModule,
    AdminEditPageRoutingModule,
    FormsModule,
    QuillModule
  ]
})
export class AdminEditPageModule { }
