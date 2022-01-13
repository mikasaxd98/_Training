import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageViewComponent } from './components/main-page-view/main-page-view.component';
import { MainPageContainerComponent } from './components/main-page-container/main-page-container.component';
import { MainPageRoutingModule } from './main-page-routing.module';
import { MainPageProductComponent } from './components/main-page-product/main-page-product.component';
import { QuillModule } from 'ngx-quill';
import { SortingPipe } from '../../../shared/pipes/sorting.pipe';



@NgModule({
  declarations: [
    MainPageViewComponent,
    MainPageContainerComponent,
    MainPageProductComponent,
    SortingPipe,
  ],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    QuillModule,
  ]
})
export class MainPageModule { }
