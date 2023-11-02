import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from './ui/ui.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UiModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports :[UiModule,CommonModule,FormsModule,ReactiveFormsModule, HttpClientModule]
})
export class SharedModule { }
