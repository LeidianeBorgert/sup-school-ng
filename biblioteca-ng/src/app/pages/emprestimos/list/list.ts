import { Component } from '@angular/core';
import { EmprestimoService } from '../../../services/emprestimo.service';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { EmprestimoResponse } from '../../../models/emprestimo.dto';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-list',
  imports: [FormsModule,
    TableModule,
    CommonModule,
    InputTextModule,
    ButtonModule,
  ],
  templateUrl: './list.html',
  styleUrl: './list.scss'
})
export class EmprestimoList {

emprestimos:EmprestimoResponse[] = [];

constructor(private emprestimoService:EmprestimoService){}

ngOnInit() {
    this.carregarEmprestimos();
}
  private carregarEmprestimos() {
    this.emprestimoService.getAll().subscribe({
    next: emprestimos => this.emprestimos = emprestimos,
    error: erro => {
        alert("Não foi possível carregar os emprestimos");
        console.error("Ocorreu um erro ao carregar os emprestimos: " + erro)
    }
    });
  }

}
