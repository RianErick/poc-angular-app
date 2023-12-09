import { User } from './../../../shared/model/user';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'; // Remova o FormsModule


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  user : User;
  loginForm : FormGroup;

  constructor(){
  this.user = {
    usuario : '',
    email : '',
    senha : ''
 }
  this.loginForm = new FormGroup({
    usuario : new FormControl('', [Validators.required]),
    senha : new FormControl('',[Validators.required, Validators.minLength(8)]),
    email : new FormControl('', [Validators.required, Validators.email]),
  })}

 printarTela(){
  this.user.usuario = this.loginForm.get('usuario')?.value,
  this.user.senha = this.loginForm.get('senha')?.value,
  this.user.email = this.loginForm.get('email')?.value,

  alert(this.user.usuario + this.user.email + this.user.senha);

  console.log(this.user.usuario);
 }

  ngOnInit() {}
}

