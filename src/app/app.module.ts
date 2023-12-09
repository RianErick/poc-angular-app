import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HttpsRequestInterceptor, InterceptorModule } from './core/interceptor/interceptor.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8080',
        realm: 'security-api',
        clientId: 'web-app'
      },
      initOptions: {
        checkLoginIframe: false
      }
    });
}
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    KeycloakAngularModule,
    InterceptorModule
  ],
  providers: [  {
    provide: APP_INITIALIZER,
    useFactory: initializeKeycloak,
    multi: true,
    deps: [KeycloakService]
  },
  {provide: HTTP_INTERCEPTORS, useClass: HttpsRequestInterceptor, multi: true} ,
],
  bootstrap: [AppComponent]
})
export class AppModule { }
