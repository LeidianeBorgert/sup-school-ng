import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { AlunoCadastroRequest } from '../../../models/aluno.dto';
import { AlunoService } from '../../../services/aluno.service';
import { Router } from '@angular/router';
import { DatePickerModule } from 'primeng/datepicker';
import { InputText } from 'primeng/inputtext';

@Component({
  selector: 'app-create',
  imports: [FormsModule, ButtonModule,DatePickerModule, InputText],
  templateUrl: './create.html',
  styleUrl: './create.scss'
})
export class AlunoCreate {

  form: AlunoCadastroRequest;

  constructor(
    private alunoService: AlunoService,
    private router: Router,
  ) {
    this.form = {
      nome: "",
      sobrenome: "",
      dataNascimento: "",
      cpf: ""

    }
  }
  salvar(){
    this.alunoService.create(this.form).subscribe({
      next:_=>this.router.navigate(["/alunos"]),
      error:erro=>{
        alert("Não foi possível cadastrar aluno");
        console.error(erro);
      }
    })
  }

}
