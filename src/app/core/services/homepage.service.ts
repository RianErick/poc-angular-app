import { Livro } from './../../shared/model/livro';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomepageService {
  constructor(private http: HttpClient) {}

  listAll(): Observable<Livro[]> {
    return this.http.get<Livro[]>('/api/livros/list-all');
  }

  createLivro(livro: Livro): Observable<Livro> {
   return this.http.post<Livro>('/api/livros/create', livro)
  }

  deleteLivro(livro : Livro): Observable<Livro> {
    return this.http.delete<Livro>(`/api/livros/${livro.id}`);
  }

}
