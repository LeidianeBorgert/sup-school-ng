import { Component } from '@angular/core';
import { CursoResponse } from '../../../models/curso.dto';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { CursoService } from '../../../services/curso.service';

@Component({
  selector: 'app-list',
  imports: [FormsModule, TableModule,CommonModule],
  templateUrl: './list.html',
  styleUrl: './list.scss'
})
export class CursoList {
  cursos: CursoResponse[] = [];

  constructor(private cursoService:CursoService){}
  ngOnInit(){
    this.carregarCursos();
  }
  private carregarCursos() {
    this.cursoService.getAll().subscribe({
      next:cursos=>this.cursos = cursos,
      error:erro =>{
        alert("Não foi possivel carregar cursos");
        console.error("Ocorreu um erro ao carregar cursos: " + erro)
      }
    })
  }
}
