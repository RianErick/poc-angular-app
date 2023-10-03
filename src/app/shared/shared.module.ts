import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from './ui/ui.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UiModule,
  ],
  exports :[UiModule,CommonModule]
})
export class SharedModule { }
