import { Component } from '@angular/core';
import { EmprestimoService } from '../../../services/emprestimo.service';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-list',
  imports: [FormsModule,
    TableModule,
    CommonModule,
    InputTextModule,
  ],
  templateUrl: './list.html',
  styleUrl: './list.scss'
})
export class EmprestimoList {

emprestimos:EmprestimoList[] = [];

constructor(private emprestimoService:EmprestimoService){}
}
