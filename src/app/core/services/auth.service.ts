import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
import { User } from 'src/app/shared/model/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  token: string;

  constructor(
    private key: KeycloakService,
    private http: HttpClient,
    private router: Router
  ) {
    this.token = '';
  }

  readonly url =
    'http://localhost:8080/realms/security-api/protocol/openid-connect/token';

  loginKeyclock(user: User) {
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/x-www-form-urlencoded');
    const body = new HttpParams()
      .set('username', user.usuario)
      .set('password', user.senha)
      .set('grant_type', 'password')
      .set('client_id', 'web-app');

    this.http.post<any>(this.url, body, { headers }).subscribe({
      next: (data) => {
        console.log('Resposta do loginKeycloak:', data);
        this.router.navigate(['/home/page']);
        this.setToken(data);
      },
      error: (erro) => {
        console.log(erro);
        alert(erro.error.error_description);
      },
    });
  }

  setToken(data: any): string {
    return this.token = data.access_token;
  }

  getToken() : string {
    return this.token;
  }
}
