import { Component } from '@angular/core';
import { UsuarioResponse } from '../../models/usuario.dto';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { UsuarioService } from '../../services/usuario.service';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-list',
  imports: [FormsModule,
    TableModule,
    CommonModule,
    ButtonModule,
    RouterLink],
  template: `


      <div class="flex justify-content-end mr-2 mt-2">
    <p-button label="Cadastrar" severity="info" icon="pi pi-plus" routerLink="cadastrar" />

</div>

<div class="mr-2 mt-2 ml-2">
    <p-table [value]="usuario" [tableStyle]="{ 'min-width': '50rem' }">
        <ng-template #header>
            <tr>
                <th>Código</th>
                <th>Nome</th>
                <th>Email</th>
                <th>Telefone</th>
                <th>Endereço</th>
                <th></th>
            </tr>
        </ng-template>
        <ng-template #body let-usuario>
            <tr>
                <td>{{ usuario.id }}</td>
                <td>{{ usuario.nome }}</td>
                <td>{{ usuario.email }}</td>
                <td>{{ usuario.telefone }}</td>
                <td>{{ usuario.endereco }}</td>

                <td class="flex gap-2">
                    <!-- Depois será adicionado os botões -->
                </td>

               <td class="flex gap-2">
                    <p-button label="Editar" icon="pi pi-pencil" severity="warn"
                        routerLink="/usuario/editar/{{usuario.id}}" />
                    <p-button (click)="apagar(usuario.id)" label="Apagar" icon="pi pi-trash" outlined severity="danger" />

                </td>


            </tr>
        </ng-template>
    </p-table>
</div>


  `,
  styles: ``
})
export class UsuarioList {


  usuario: UsuarioResponse[] = [];

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.carregarUsuario();
  }

  private carregarUsuario() {
    this.usuarioService.getAll().subscribe({
      next: usuario => this.usuario = usuario,
      error: erro => {
        alert("Não foi possivel carregar usuarios");
        console.error("Ocorreu um erro ao carregar os usuarios: " + erro)
      }
    })
  }
  apagar(id: number) {
    this.usuarioService.delete(id).subscribe({
      next: _ => this.carregarUsuario(),
      error: erro => {
        alert("Não foi possivel apagar usuário");
        console.error("Ocorreu um erro ao apagar o usuário: " + erro)
      }
    })
  }


}
