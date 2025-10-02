import { Component } from '@angular/core';
import { Route,Router, RouterLink } from '@angular/router';

interface Turma {
  id:string;
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

  constructor(private router: Router) {
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

  editarTurma(turma: Turma): void {
    this.router.navigate([`turmas/editar/${turma.id}`])
  }
  salvarTurmaLocalStorage(): void {

    let turmasString = JSON.stringify(this.turmas);
    localStorage.setItem("turmas", turmasString);

  }

}
