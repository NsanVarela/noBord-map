import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { UserModel } from '../model/user.model';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user: UserModel = new UserModel()
  newUser
  registerForm: FormGroup
  hide: boolean = true
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  

  constructor( private formBuilder: FormBuilder, private router: Router, private userService: UserService, private authService: AuthService ) { }

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
      'type' : [this.user.type, [
        Validators.required
      ]],
    })
  }

  onRegisterSubmit() {
    // alert(this.user.username + ' '
    // + this.user.password + ' '
    // + this.user.language + ' '
    // + this.user.type)
    this.authService.register(this.registerForm.value)
    // .pipe(first())
    .subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.newUser = data;
        this.router.navigate([`/auth`]);
      },
      error => {
        console.log('error', error);
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
      }
    )
  }

}
