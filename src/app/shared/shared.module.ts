import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from './ui/ui.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UiModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports :[UiModule,CommonModule,FormsModule,ReactiveFormsModule]
})
export class SharedModule { }
