import { Component } from '@angular/core';
import { AutorResponse } from '../../../models/autor.dto';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { AutorService } from '../../../services/autor.service';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list',
  imports: [TableModule, CommonModule,ButtonModule,RouterLink],
  templateUrl: './list.html',
  styleUrl: './list.scss'
})
export class AutorList {
  autores: AutorResponse[] = [];

  constructor(private autorService: AutorService) { }
  ngOnInit() {
    this.carregarAutores();
  }
  carregarAutores() {
    this.autorService.getAll().subscribe({
      next:autores =>this.autores = autores,
      error:erro =>{
        alert("Não foi possível carregar os autores");
        console.error("Ocorreu um erro  ao carregar  os autores: " + erro )
      }
    });
  }
}
