import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CursoResponse } from '../models/curso.dto';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  url = "https://api.franciscosensaulas.com/api/v1/escola/cursos"
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<CursoResponse[]> {
    return this.httpClient.get<CursoResponse[]>(this.url);
}
}
