import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { SignupComponent } from './signup/signup.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule
  ]
})
export class LoginModule { }
