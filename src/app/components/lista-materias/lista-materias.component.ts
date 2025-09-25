import { Component } from '@angular/core';
import { RouterEvent, RouterLink } from '@angular/router';

interface Materia {
  nome: string;
}

@Component({
  selector: 'app-lista-materias',
  imports: [RouterLink],
  templateUrl: './lista-materias.component.html',
  styleUrl: './lista-materias.component.scss'
})
export class ListaMateriasComponent {

  materias: Materia[];

  constructor() {
    this.materias = this.carregarMateriasLocalStorage();
  }
  carregarMateriasLocalStorage(): Materia[] {
    let materiasLocalStorage = localStorage.getItem("materias");
    if (materiasLocalStorage === null) {
      return [];
    };
    let materias: Materia[] = JSON.parse(materiasLocalStorage);
    return materias;
  }
  apagarMateria(materia: Materia): void {
    let indiceApagarMateria = this.materias.indexOf(materia);
    this.materias.splice(indiceApagarMateria, 1);
    this.salvarMateriaLocalStorage();
  }
  salvarMateriaLocalStorage(): void {
    let materiasString = JSON.stringify(this.materias);
    localStorage.setItem("materias", materiasString)
  }

}

