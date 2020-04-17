import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { UserModel } from '../../_models/user';
import { AuthenticationService } from '../../_services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: UserModel = new UserModel();
  public loginForm: FormGroup;
  hide: boolean = true;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = ``;

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      'email' : [this.user.email, [
        Validators.required,
        Validators.minLength(2)
      ]],
      'password' : [this.user.password, [
        Validators.required,
        Validators.minLength(4)
      ]]
    })
  }

  public login() {
    this.auth.login(this.loginForm.value).subscribe(
      () => {
        this.user = this.auth.getUserDetails()
        this.router.navigate([`profile`], { queryParams: this.user })
      },
      err => {
        console.log(err)
      }
    )
  }

  reloadPage() {
    window.location.reload()
  }

}
