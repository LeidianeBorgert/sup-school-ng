import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AutorEditarRequest } from '../../../models/autor.dto';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DatePickerModule } from 'primeng/datepicker';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { AutorService } from '../../../services/autor.service';


interface Nacionalidade {
  nome: string;
}
@Component({
  selector: 'app-edit',
  imports: [FormsModule,
    ButtonModule,
    InputTextModule,
    DatePickerModule,
    SelectModule,
  ],
  templateUrl: './edit.html',
  styleUrl: './edit.scss'
})
export class AutorEdit {
   id: number;
   form:AutorEditarRequest;

    nacionalidades: Nacionalidade[] = [
    { nome: "Brasileiro" },
    { nome: "Argentino" },
    { nome: "Uruguaio" },
    { nome: "Paraguaio" },
    { nome: "Chileno" },
    { nome: "Boliviano" },
    { nome: "Peruano" },
    { nome: "Equatoriano" },
    { nome: "Colombiano" },
    { nome: "Venezuelano" },
    { nome: "Guianense" },
    { nome: "Surinamês" },
    { nome: "Francoguianense" }
  ];

   constructor(private activatedRoute: ActivatedRoute,
    private autorService:AutorService,
    private router:Router
,   ){
this.id= parseInt(this.activatedRoute.snapshot.paramMap.get("id")!.toString());

this.form = {
      nome: "",
      nacionalidade: "",
      dataNascimento: ""
    }
    this.carregarAutor();
   }
     private carregarAutor(){
    this.autorService.getById(this.id).subscribe({
      next: autor => {
        this.form.nome = autor.nome
        this.form.nacionalidade = autor.nacionalidade
        this.form.dataNascimento = new  Date(autor.dataNascimento).toLocaleDateString('pt-Br')
      },
      error: erro => {
        console.error(erro);
        alert("Não foi possível carregar a autor")
      }
    })
  }
salvar(){
    this.autorService.update(this.id, this.form).subscribe({
      next: resposta => this.router.navigate(["/autores"]),
      error: erro => {
        console.error(erro);
        alert("Não foi possível atualizar a autor")
      }
    })
  }
  }


