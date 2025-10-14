import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmprestimoResponse } from '../models/emprestimo.dto';

@Injectable({
  providedIn: 'root'
})
export class EmprestimoService {
  
    url = "https://api.franciscosensaulas.com/api/v1/biblioteca/emprestimos"

    constructor(private httpClient:HttpClient){}

    getAll():Observable<EmprestimoResponse[]>{
      return this.httpClient.get<EmprestimoResponse[]>(this.url);
    }

}

