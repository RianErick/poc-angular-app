import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudLivroComponent } from './crud-livro/crud-livro.component';

const routes: Routes = [

  {path : '' , component: CrudLivroComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LivroRoutingModule { }
