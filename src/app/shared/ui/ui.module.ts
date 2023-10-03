import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule
  ],
})
export class UiModule { }
