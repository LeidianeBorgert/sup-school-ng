import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Professor {
  nome: string;
  cpf: number;
  dataDeNascimento: string;
  cnpj: number;
  chavePix: number;
  nomeFantasia: string;
  valorHora: number;
  celular: number;

}

@Component({
  selector: 'app-lista-professores',
  imports: [RouterLink],
  templateUrl: './lista-professores.component.html',
  styleUrl: './lista-professores.component.scss'
})
export class ListaProfessoresComponent {

  professores: Professor[];

  constructor() {
    this.professores = this.carregarProfessoresLocalStorage();
  }
  carregarProfessoresLocalStorage(): Professor[] {
    let professoresLocalStorage = localStorage.getItem("professores");
    if (professoresLocalStorage === null) {
      return [];
    }
    let professores: Professor[] = JSON.parse(professoresLocalStorage);
    return professores;
  }

  apagarProfessor(professor:Professor):void{
    let indiceApagarProfessor = this.professores.indexOf(professor);
    this.professores.splice(indiceApagarProfessor,1);
    this.salvarProfessorLocalStorage();
  }
  salvarProfessorLocalStorage():void{
    let professoresString = JSON.stringify(this.professores);
    localStorage.setItem("professores",professoresString);
  }
}
