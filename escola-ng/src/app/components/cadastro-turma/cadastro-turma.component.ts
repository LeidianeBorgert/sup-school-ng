import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

interface Turma {
  id: string;
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

  idEditarTurma?: string;

  constructor(
    private router: Router,
    private activatedRouted: ActivatedRoute,
  ) {
    this.turmas = this.carregarTurmasLocalStorage();
    let idParaEditarTurma = this.activatedRouted.snapshot.paramMap.get("id");

    if (idParaEditarTurma !== null) {
      this.idEditarTurma = idParaEditarTurma.toString();

      this.preencherCamposParaEditar();
    }
  }
  preencherCamposParaEditar(): void {
    let turma = this.turmas.filter(turma => turma.id === this.idEditarTurma)[0];
    this.nome = turma.nome;
    this.sigla = turma.sigla;

  }
  salvarTurma(): void {
    if (this.idEditarTurma === undefined) {
      this.cadastrarTurma(this.nome, this.sigla)
    } else {
      this.editarTurma(this.nome, this.sigla)
    }
    this.salvarTurmaLocalStorage();
    this.router.navigate(["/turmas"]);
  }
  editarTurma(nome: string, sigla: string): void {
    let indiceLista = this.turmas.findIndex(turma => turma.id === this.idEditarTurma);

    this.turmas[indiceLista].nome = this.nome;
    this.turmas[indiceLista].sigla = this.sigla;
  }

  cadastrarTurma(nome: string, sigla: string): void {
    let turma: Turma = {
      id: crypto.randomUUID(),
      nome: this.nome,
      sigla: this.sigla,
    };

    this.turmas.push(turma);

  };


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
