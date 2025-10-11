import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LivroCadastroRequest } from '../models/livro.dto';


@Injectable({
  providedIn: 'root'
})
export class LivroService {
  
  url = "https://api.franciscosensaulas.com/api/v1/biblioteca/livros"

  constructor(private httpClient: HttpClient) { }

  create(form: LivroCadastroRequest): Observable<void> {
    return this.httpClient.post<void>(this.url, form);
  }
}
