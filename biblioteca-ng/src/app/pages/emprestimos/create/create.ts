import { Component } from '@angular/core';
import { EmprestimoCadastroRequest } from '../../../models/emprestimo.dto';
import { EmprestimoService } from '../../../services/emprestimo.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-create',
  imports: [[FormsModule, 
    ButtonModule,
    TableModule,
    InputTextModule,
  InputMaskModule],],
  templateUrl: './create.html',
  styleUrl: './create.scss'
})
export class EmprestimoCreate {

  form: EmprestimoCadastroRequest;

  constructor(
    private emprestimoService: EmprestimoService,
    private router: Router,
  ) {
    this.form = {
      livro: "",
      usuario: "",
      dataEmprestimo: new Date (""),
      dataDevolucao: new Date (""),
      status: "",
    }
  }
  salvar(){
    this.emprestimoService.create(this.form).subscribe({
        next: _ => this.router.navigate(["/emprestimos"]),
        error: erro => {
            alert("Não foi possível cadastrar emprestimo");
            console.error(erro);
        } 
    })
}
}
