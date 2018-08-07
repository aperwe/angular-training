import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpSentEvent, HttpHeaderResponse, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { SecurityService } from './security.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private security: SecurityService) { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    const authRequest = req.clone({
      setHeaders: {
        Authorization: "Bearer " + this.security.getToken()
      }
    })

    return next.handle(authRequest)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status == 401) {
            this.security.authorize();

          }
          return throwError(Error("Server error: " + error.error.message));
        })
      );
  }
}
