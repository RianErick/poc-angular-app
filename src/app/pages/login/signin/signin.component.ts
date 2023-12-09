import { AuthService } from './../../../core/services/auth.service';
import { Component } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { User } from 'src/app/shared/model/user';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent {
  userForm: UntypedFormGroup;
  user: User;
  token : string;

  constructor(
    private forms: UntypedFormBuilder,
    private keyclock: AuthService,
    private router: Router
  ) {
    this.user = {} as User;
    this.userForm = this.loginFormCreate();
    this.token = '';
  }
  loginFormCreate(): UntypedFormGroup {
    return this.forms.group({
      usuario: [
        this.user.usuario,
        [Validators.required, Validators.min(3), Validators.max(255)],
      ],
      senha: [
        this.user.senha,
        [Validators.required, Validators.min(3), Validators.max(8)],
      ],
    });
  }

  loginKeyclockContext() {
    let user: User = this.userForm.getRawValue();
     this.keyclock.loginKeyclock(user);
  }


  get usuario() {
    return this.userForm.get('usuario');
  }

  get senha() {
    return this.userForm.get('senha');
  }
}
