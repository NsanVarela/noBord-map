import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { LoginModel } from '../../_models/login.model';
import { AuthService } from '../../_services/auth.service';
import { TokenStorageService } from '../../_services/token-storage.service';
import { AuthentificationService } from '../../_services/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: LoginModel = new LoginModel();
  loginForm: FormGroup;
  hide: boolean = true;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  constructor( private formBuilder: FormBuilder, private authentificationService: AuthentificationService, private authService: AuthService, private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    }
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
    this.authService.login(this.loginForm.value).subscribe(
        data => {
          this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        // this.reloadPage();
      },
        err => {
          this.errorMessage = err.error.message;
          this.isLoginFailed = true;
        }
      )
  }

  reloadPage() {
    window.location.reload();
  }

}
