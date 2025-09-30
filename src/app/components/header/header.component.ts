import { Component } from '@angular/core';
import { NavbarComponent, NavbarMenu } from "./component/navbar/navbar.component";

@Component({
  selector: 'app-header',
  imports: [NavbarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  menus: NavbarMenu[];

  constructor() {
    this.menus = [
      { link: "calculadora", titulo: "Calculadora" },
      { link: "lista-pessoas", titulo: "Lista de Pessoas" },
      { link: "alunos", titulo: "Alunos" },
      { link: "turmas", titulo: "Turmas" },
      { link: "materias", titulo: "Materias" },
      { link: "professores", titulo: "Professores" },
    ]
  }

}
