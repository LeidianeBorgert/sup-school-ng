import { Routes } from '@angular/router';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { ListaPessoasComponent } from './components/lista-pessoas/lista-pessoas.component';
import { ListaAlunosComponent } from './components/lista-alunos/lista-alunos.component';
import { CadastroAlunoComponent } from './components/cadastro-aluno/cadastro-aluno.component';
import { ListaTurmasComponent } from './components/lista-turmas/lista-turmas.component';
import { CadastroTurmaComponent } from './components/cadastro-turma/cadastro-turma.component';
import { ListaMateriasComponent } from './components/lista-materias/lista-materias.component';
import { CadastroMateriaComponent } from './components/cadastro-materia/cadastro-materia.component';

export const routes: Routes = [
    { path: "calculadora", component: CalculadoraComponent },
    { path: "lista-pessoas", component: ListaPessoasComponent },
    { path: "alunos", component: ListaAlunosComponent },
    { path: "cadastro", component: CadastroAlunoComponent },
    { path: "turmas", component: ListaTurmasComponent },
    {path: "cadastro-turmas", component: CadastroTurmaComponent},
    {path: "materias", component:ListaMateriasComponent},
    {path: "cadastro-materias", component:CadastroMateriaComponent}

];
