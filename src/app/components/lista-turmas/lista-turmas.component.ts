import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Turma {
  nome: string;
  sigla: string;
}


@Component({
  selector: 'app-lista-turmas',
  imports: [RouterLink],
  templateUrl: './lista-turmas.component.html',
  styleUrl: './lista-turmas.component.scss'
})
export class ListaTurmasComponent {

  turmas: Turma[];

  constructor() {
    this.turmas = this.carregarTurmasLocalStorage();
  }
  carregarTurmasLocalStorage(): Turma[] {
    let turmasLocalStorage = localStorage.getItem("turmas");
    if (turmasLocalStorage === null) {
      return [];
    };
    let turmas: Turma[] = JSON.parse(turmasLocalStorage);
    return turmas;
  }
  apagarTurma(turma: Turma): void {
    let indiceApagarTurma = this.turmas.indexOf(turma);
    this.turmas.splice(indiceApagarTurma, 1);
    this.salvarTurmaLocalStorage();
  }
  salvarTurmaLocalStorage(): void {

    let turmasString = JSON.stringify(this.turmas);
    localStorage.setItem("turmas", turmasString);

  }

}
