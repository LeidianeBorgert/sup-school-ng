import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { UsuarioCadastroRequest } from '../../models/usuario.dto';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';


@Component({
  selector: 'app-create',
  imports: [FormsModule, 
    ButtonModule,
    TableModule,
    InputTextModule,
  InputMaskModule],
  template: `
  
  <div class="p-5">
 <div class="flex w-full mw-full justify-content-evenly gap-2 mb-2">
   
        <div class="flex-grow-1">
            <label for="campo-nome">Nome<span class="text-red-500">*</span></label>
            <input type="text" pInputText [(ngModel)]="form.nome" id="campo-nome" fluid />
        </div>
    </div>
     <div class="flex w-full mw-full justify-content-evenly gap-2 mb-2">
        <div class="flex-grow-1">
            <label for="campo-email">Email<span class="text-red-500">*</span></label>
            <input type="text" pInputText [(ngModel)]="form.email" id="campo-email" fluid />
        </div>
    </div>
    <div class="flex w-full mw-full justify-content-evenly gap-2 mb-2">
        <div class="flex-grow-1">
            <label for="campo-telefone">Telefone</label>
            <p-inputmask mask="(99)99999-9999" [(ngModel)]="form.telefone" placeholder="(99)99999-9999" fluid id="campo-telefone" />
        </div>       
    </div>
    <div class="flex w-full mw-full justify-content-evenly gap-2 mb-2">
        <div class="flex-grow-1">
            <label for="campo-endereco">Endereço</label>
            <input type="text" pInputText [(ngModel)]="form.endereco" id="campo-endereco" fluid />
        </div>
    </div>
    <div class="flex justify-content-end mt-2">
            <p-button label="Salvar" (click)="salvar()" icon="pi pi-save" />
        </div>
</div>

 
  `,
  styles: ``
})
export class UsuarioCreate {
  form: UsuarioCadastroRequest;

  constructor(
    private usuarioService:UsuarioService,
    private router:Router,

  ) {
    this.form = {
    nome:"",
    email:"",
    telefone:"",
    endereco:"",
    };
  }
  salvar(){
    this.usuarioService.create(this.form).subscribe({
      next:_=>this.router.navigate(["/usuario"]),
      error:erro=>{
        alert("Não foi possível cadastrar o usuário");
        console.error(erro);
      }
    });
  }

}
