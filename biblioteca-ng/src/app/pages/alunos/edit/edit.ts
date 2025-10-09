import { Component } from '@angular/core';
import { AlunoCadastroRequest, AlunoEditarRequest } from '../../../models/aluno.dto';
import { ActivatedRoute, Router } from '@angular/router';
import { AlunoService } from '../../../services/aluno.service';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DatePickerModule } from 'primeng/datepicker';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-edit',
  imports: [FormsModule,ButtonModule,
    InputTextModule,
    DatePickerModule],
  templateUrl: './edit.html',
  styleUrl: './edit.scss'
})
export class AlunoEdit {
  id: number;
  form: AlunoEditarRequest;

  constructor(private activatedRoute: ActivatedRoute,
    private alunoService: AlunoService,
    private router: Router,
  ) {
    this.id = parseInt(this.activatedRoute.snapshot.paramMap.get("id")!.toString());

    this.form = {
      nome: "",
      sobrenome: "",
      dataNascimento: "",
      cpf: ""
    }
    this.carregarAluno();
   
  }
  private carregarAluno() {
    this.alunoService.getById(this.id).subscribe({
      next: aluno => {
        this.form.nome = aluno.nome
        this.form.sobrenome = aluno.sobrenome
        this.form.dataNascimento = new Date(aluno.dataNascimento).toLocaleDateString('pt-Br')
        this.form.cpf = aluno.cpf

      },
      error: erro => {
        console.error(erro);
        alert("Não foi possível carregar aluno")
      }
    })

  }
   salvar(){
      this.alunoService.update(this.id, this.form).subscribe({
        next:resposta => this.router.navigate(["/alunos"]),
        error:erro=>{
          console.error(erro);
          alert("Não foi possivel atualizar o aluno")
        }

      })
    }
}


