import { ModalcreateComponent } from './../modalcreate/modalcreate.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Livro } from 'src/app/shared/model/livro';

import { HomepageService } from './../../../core/services/homepage.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  displayedColumns = ['id', 'autor', 'nome'];
  listBlocks: any;
  livro!: Livro;

  constructor(
    public homepageService: HomepageService,
    private dialog: MatDialog,
  ) {
    this.getAll();
   }

  getAll() {
      this.homepageService.listAll().subscribe((data) => {
      this.listBlocks = data;
    });
  }

  newLoad() {
    this.getAll();
  }

  addNew() {
   this.openModalSave();
   this.dialog.afterAllClosed.subscribe(() => {
   this.newLoad()
   })
  }

  private openModalSave() {
   this.dialog.open(ModalcreateComponent);
  }
  ngOnInit() {}
}
