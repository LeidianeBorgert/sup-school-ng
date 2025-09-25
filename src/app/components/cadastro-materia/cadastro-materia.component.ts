import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, Router } from '@angular/router';

interface Materia {
  nome: string;
}

@Component({
  selector: 'app-cadastro-materia',
  imports: [FormsModule],
  templateUrl: './cadastro-materia.component.html',
  styleUrl: './cadastro-materia.component.scss'
})
export class CadastroMateriaComponent {
  materias: Materia[];

  nome: string = "";

  constructor(private router: Router) {
    this.materias = this.carregarMateriasLocalStorage();
  }
  salvarMateria(): void {
    let materia: Materia = {
      nome: this.nome
    }
    this.materias.push(materia);
    this.salvarMateriaLocalStorage();
    this.router.navigate(["/materias"])
  }
  salvarMateriaLocalStorage(): void {
    let materiasString = JSON.stringify(this.materias);
    localStorage.setItem("materias", materiasString);
  }
  carregarMateriasLocalStorage(): Materia[] {
    let materiasLocalStorage = localStorage.getItem("materias");
    if (materiasLocalStorage === null) {
      return [];
    }
    let materias: Materia[] = JSON.parse(materiasLocalStorage);
    return materias;

  }


}
