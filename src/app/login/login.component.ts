import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { LoginModel } from '../model/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: LoginModel = new LoginModel()
  loginForm: FormGroup
  hide: boolean = true

  constructor( private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      'username' : [this.user.username, [
        Validators.required,
        Validators.minLength(2)
      ]],
      'password' : [this.user.password, [
        Validators.required,
        Validators.minLength(8)
      ]]
    })
  }

  onLoginSubmit() {
    alert(this.user.username + ' '
    + this.user.password)
  }

}
