import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { SigninComponent } from 'src/app/pages/login/signin/signin.component';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class HttpsRequestInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const authToken = this.auth.getToken();

    const authReq = req.clone({
      headers: req.headers.set('Authorization', 'Bearer ' + authToken)
    });
  return next.handle(authReq);
  }
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class InterceptorModule { }
