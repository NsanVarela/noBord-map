import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserModel } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  protected user: UserModel = new UserModel();
  protected newUser;
  protected registerForm: FormGroup
  protected hide: boolean = true
  protected isSuccessful = false;
  protected isSignUpFailed = false;
  protected errorMessage = '';
  protected targets;
  protected selectedLanguage: string;
  protected chosenLanguage: string;
  public selectOption: string = `Sélectionnez une langue`;
  public userType: IUserType[] = [
    {value: 'D.E.', viewValue: `Demandeur d'emploi`},
    {value: 'P.E.', viewValue: 'Agent Pôle emploi'}
  ];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private authService: AuthService,
    private languageService: LanguageService ) { }

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
    });
    this.languageService.getLanguages().subscribe({
      next: data => {
        this.targets = data;
        // console.log('data', data)
      }
    });
  };

  selectLanguage(e) {
    this.selectedLanguage =
      e.target.value.charAt(0).toUpperCase() +
      e.target.value.substring(1).toLowerCase();
      this.targets.map(el => {
        if (el.name.includes(this.selectedLanguage)) {
          this.chosenLanguage = el.code;
        }
      });
  }

  onRegisterSubmit() {
    this.authService.register(this.registerForm.value)
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
    );
  };

}
