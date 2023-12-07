import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private key: KeycloakService , private http: HttpClient) {}

  readonly url = 'localhost:8080/realms/security-api/protocol/openid-connect/token';

  loginKeyclock(username: string , password: string) {
    const body = new HttpParams()
    .set('username', username)
    .set('password', password)
    .set('grant_type', 'password')
    .set('client_id', 'web-app');
    return this.http.post(this.url,body);
  }

  logoutKeyclock() : Promise<void> {
    return this.key.logout();
  }
}
