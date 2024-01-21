import { DIALOG_DATA } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { HomepageService } from 'src/app/core/services/homepage.service';
import { Livro } from 'src/app/shared/model/livro';
import Swal from 'sweetalert2';

export interface DialogData {
  id: number;
  action: string;
  livro: Livro;
}
@Component({
  selector: 'app-modalcreate',
  templateUrl: './modalcreate.component.html',
  styleUrls: ['./modalcreate.component.css'],
})
export class ModalcreateComponent {
  livro!: Livro;
  livroForm: UntypedFormGroup;

  constructor(
    private forms: UntypedFormBuilder,
    private livroService: HomepageService,
    @Inject(DIALOG_DATA) public data: DialogData,
    public dialogRef: MatDialogRef<ModalcreateComponent>
  ){
    this.livro = {} as Livro;
    this.livroForm = this.livroFormCreate();
  }

  livroFormCreate(): UntypedFormGroup {
    return this.forms.group({
      id: [this.livro.id],
      autor: [this.livro.autor, [Validators.required, Validators.min(3) , Validators.max(255)]],
      nome: [this.livro.nome, [Validators.required, Validators.min(3) , Validators.max(255)]],
      urlCapa: [this.livro.urlCapa , [ Validators.required,Validators.min(3)]],
    });
  }

  get id() {
    return this.livroForm.get('id');
  }

  get autor() {
    return this.livroForm.get('autor');
  }

  get nome() {
    return this.livroForm.get('nome');
  }

  get urlCapa (){
    return this.livroForm.get('urlCapa')
  }

  createLivro(): void {
    const row = this.livroForm.getRawValue();
    this.livroService.createLivro(row).subscribe(() => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
      this.close();
    })
  }

  close(): void {
    this.dialogRef.close();
  }

}
