import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  imports: [FormsModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.scss'
})
export class CalculadoraComponent {
  numero1?: number; //usar o ? quando não queremos q o valor fique ja preeenchido 
  numero2?: number;

  //void quer dizer que é uma função que não tem retorno
  somar(): void {
    let soma: number = this.numero1! + this.numero2!; //serve para dizer q o valor vai estar preenchido
    alert(`Soma: ${soma}`)
  }
}
