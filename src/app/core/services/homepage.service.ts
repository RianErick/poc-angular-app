import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Livro } from 'src/app/shared/model/livro';

@Injectable({
  providedIn: 'root'
})
export class HomepageService {

  constructor(private http: HttpClient) { }


      listAll(): Observable<Livro[]> {
        return this.http
       .get<Livro[]>('/api/livros/list-all');

    }
}
