import { afterNextRender, Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputMaskModule } from 'primeng/inputmask';
import { TableModule } from 'primeng/table';
import { UsuarioEditarRequest } from '../../models/usuario.dto';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';

import { InputTextModule, InputTextStyle } from 'primeng/inputtext';

@Component({
  selector: 'app-edit',
  imports: [FormsModule,
    ButtonModule,
    InputMaskModule,
    TableModule,
    InputTextModule
  ],
  template: `
    <p>
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
export class UsuarioEdit {
  id: number;
  form: UsuarioEditarRequest;

  constructor(private activatedRoute: ActivatedRoute,
    private usuarioService: UsuarioService,
    private router: Router,
  ) {

    this.id = parseInt(this.activatedRoute.snapshot.paramMap.get("id")!.toString());

    this.form = {

      nome: "",
      email: "",
      telefone: "",
      endereco: "",
    }
    this.carregarUsuario();
  }
  private carregarUsuario() {
   this.usuarioService.getById(this.id).subscribe({
      next: usuario => {
        this.form.nome = usuario.nome
        this.form.email = usuario.email
        this.form.telefone = usuario.telefone
        this.form.endereco = usuario.endereco
      },
      error: erro => {
        console.error(erro);
        alert("Não foi possível carregar a autor")
      }
    })
  }
  salvar(){
    this.usuarioService.update(this.id, this.form).subscribe({
      next: resposta => this.router.navigate(["/usuario"]),
      error: erro => {
        console.error(erro);
        alert("Não foi possível atualizar a autor")
      }
    })
  }
}


