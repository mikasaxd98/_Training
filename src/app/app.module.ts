import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { QuillModule } from 'ngx-quill';
import { AutInterceptor } from './shared/interceptors/aut.interceptor';

@NgModule( {
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    QuillModule.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: AutInterceptor
    },
  ],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
