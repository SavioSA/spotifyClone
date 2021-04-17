import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {

  constructor(private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const tokenApi = sessionStorage.getItem('token');
    if (tokenApi) {
      request = request.clone({
      setHeaders: {
      'Authorization': 'Bearer ' + tokenApi
      }
    })
    }
    next.handle(request).subscribe(response => {

    })
    return next.handle(request);
  }
}
