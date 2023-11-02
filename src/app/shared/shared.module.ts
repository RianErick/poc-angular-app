import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from './ui/ui.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UiModule,
    FormsModule,
    ReactiveFormsModule,
    TooltipModule.forRoot(),
    HttpClientModule
  ],
  exports :[UiModule,CommonModule,FormsModule,ReactiveFormsModule,TooltipModule, HttpClientModule]
})
export class SharedModule { }
