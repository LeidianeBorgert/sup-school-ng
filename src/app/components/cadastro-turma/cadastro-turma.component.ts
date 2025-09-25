import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface Turma {
  nome: string;
  sigla: string;
}

@Component({
  selector: 'app-cadastro-turma',
  imports: [FormsModule],
  templateUrl: './cadastro-turma.component.html',
  styleUrl: './cadastro-turma.component.scss'
})
export class CadastroTurmaComponent {

  turmas: Turma[];

  nome: string = "";
  sigla: string = "";

  constructor(private router: Router) {
    this.turmas = this.carregarTurmasLocalStorage();
  }
  salvarTurma(): void {
    let turma: Turma = {
      nome: this.nome,
      sigla: this.sigla,
    };

    this.turmas.push(turma);
    this.salvarTurmaLocalStorage();
    this.router.navigate(["/turmas"]);
  }

  salvarTurmaLocalStorage(): void {
    let turmasString = JSON.stringify(this.turmas);
    localStorage.setItem("turmas", turmasString);
  }

  carregarTurmasLocalStorage(): Turma[] {
    let turmasLocalStorage = localStorage.getItem("turmas");
    if (turmasLocalStorage === null) {
      return [];
    }
    let turmas: Turma[] = JSON.parse(turmasLocalStorage);
    return turmas;
  }

}
