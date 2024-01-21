import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LivroRoutingModule } from './livro-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CrudLivroComponent } from './crud-livro/crud-livro.component';
import { ModalcreateComponent } from './modalcreate/modalcreate.component';


@NgModule({
  declarations: [
     CrudLivroComponent,
     ModalcreateComponent
  ],
  imports: [
    CommonModule,
    LivroRoutingModule,
    SharedModule
  ]
})
export class LivroModule { }
