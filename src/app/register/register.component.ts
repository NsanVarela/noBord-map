import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { RegisterModel } from '../model/register.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user: RegisterModel = new RegisterModel()
  registerForm: FormGroup
  hide: boolean = true

  constructor( private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      'username' : [this.user.username, [
        Validators.required,
        Validators.minLength(2)
      ]],
      'password' : [this.user.password, [
        Validators.required,
        Validators.minLength(8)
      ]],
      'language' : [this.user.language, [
        Validators.required
      ]],
      'userType' : [this.user.userType, [
        Validators.required
      ]],
    })
  }

  onRegisterSubmit() {
    alert(this.user.username + ' '
    + this.user.password + ' '
    + this.user.language + ' '
    + this.user.userType)
  }

}
