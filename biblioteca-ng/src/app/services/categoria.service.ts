import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriaResponse } from '../models/categoria.dto';
import { ReturnStatement } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  url = "https://api.franciscosensaulas.com/api/v1/biblioteca/categorias"

  constructor(private httpClient: HttpClient) {

  }
  getAll(): Observable<CategoriaResponse[]> {
    return this.httpClient.get<CategoriaResponse[]>(this.url);
  }

}
