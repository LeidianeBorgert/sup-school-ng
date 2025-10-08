import { Routes } from '@angular/router';
import { CategoriaList } from './pages/categorias/list/list';
import { CategoriaCreate } from './pages/categorias/create/create';
import { combineLatest } from 'rxjs';
import { Component } from '@angular/core';
import { CategoriaEdit } from './pages/categorias/edit/edit';
import { AutorList } from './pages/autores/list/list';

export const routes: Routes = [
    { path: "categorias", component: CategoriaList },
    { path: "categorias/cadastrar", component: CategoriaCreate },
    { path: "categorias/editar/:id", component: CategoriaEdit },
    { path: "autores", component: AutorList },


];
