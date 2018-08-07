import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthInterceptorService } from './auth-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    AuthInterceptorService,
    {
      provide: HTTP_INTERCEPTORS,
      useExisting: AuthInterceptorService,
      multi: true
    }
  ]
})
export class SecurityModule { }
