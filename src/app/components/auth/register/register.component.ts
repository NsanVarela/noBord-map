import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserModel } from '../../../_models/user';
import { LanguageService } from '../../../_services/language.service';
import { AuthenticationService } from '../../../_services/authentication.service';
import { SharedService } from 'src/app/shared/common/shared-service';
import { VOCABULARY } from 'src/assets/data/vocabulary';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  private user: UserModel = new UserModel()
  private newUser
  private isSuccessful = false
  private isSignUpFailed = false
  private targets: any
  private selectedLanguage: string
  private chosenLanguage: string
  private languageChoice: string

  public registerForm: FormGroup
  public hide: boolean = true
  public errorMessage = ``
  public registerTitle: string
  public pseudoInputTitle: string
  public pseudoPlaceholder: string
  public emailInputTitle: string
  public emailPlaceholder: string
  public languageInputTitle: string
  public languagePlaceholder: string
  public userTypeInputTitle: string
  public userTypePlaceholder: string
  public passwordInputTitle: string
  public passwordPlaceholder: string
  public passwordInputControl: string
  public registerInstructionButton: string


  // public userType: UserType[] = [
  //   {value: 'D.E.', viewValue: `Demandeur d'emploi`},
  //   {value: 'P.E.', viewValue: 'Agent Pôle emploi'}
  // ];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private auth: AuthenticationService,
    private languageService: LanguageService,
    private sharedService: SharedService
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      'username' : [this.user.username, [
        Validators.required,
        Validators.minLength(1)
      ]],
      'email' : [this.user.email, [
        Validators.required
      ]],
      'password' : [this.user.password, [
        Validators.required
      ]],
    })

    this.registerTitle = VOCABULARY.find((v) => v.isoCode === `fr-FR`).sentences.registerTitle
    this.pseudoInputTitle = VOCABULARY.find((v) => v.isoCode === `fr-FR`).sentences.pseudoInputTitle
    this.pseudoPlaceholder = VOCABULARY.find((v) => v.isoCode === `fr-FR`).sentences.pseudoPlaceholder
    this.emailInputTitle = VOCABULARY.find((v) => v.isoCode === `fr-FR`).sentences.emailInputTitle
    this.emailPlaceholder = VOCABULARY.find((v) => v.isoCode === `fr-FR`).sentences.emailPlaceholder
    this.languageInputTitle = VOCABULARY.find((v) => v.isoCode === `fr-FR`).sentences.languageInputTitle
    this.languagePlaceholder = VOCABULARY.find((v) => v.isoCode === `fr-FR`).sentences.languagePlaceholder
    this.userTypeInputTitle = VOCABULARY.find((v) => v.isoCode === `fr-FR`).sentences.userTypeInputTitle
    this.userTypePlaceholder = VOCABULARY.find((v) => v.isoCode === `fr-FR`).sentences.userTypePlaceholder
    this.passwordInputTitle = VOCABULARY.find((v) => v.isoCode === `fr-FR`).sentences.passwordInputTitle
    this.passwordPlaceholder = VOCABULARY.find((v) => v.isoCode === `fr-FR`).sentences.passwordPlaceholder
    this.passwordInputControl = VOCABULARY.find((v) => v.isoCode === `fr-FR`).sentences.passwordInputControl
    this.registerInstructionButton = VOCABULARY.find((v) => v.isoCode === `fr-FR`).sentences.registerInstructionButton

    // this.languageService.getLanguages().subscribe({
    //   next: data => {
    //     this.targets = data;
    //     // console.log('data', data)
    //   }
    // });
  }

  ngAfterContentChecked() {
    this.languageChoice = this.sharedService.languageChoice
    if (this.languageChoice !== undefined) {
      const changeWording = VOCABULARY.find( (v) => v.isoCode === this.languageChoice )
      this.registerTitle = changeWording.sentences.registerTitle
      this.pseudoInputTitle = changeWording.sentences.pseudoInputTitle
      this.pseudoPlaceholder = changeWording.sentences.pseudoPlaceholder
      this.emailInputTitle = changeWording.sentences.emailInputTitle
      this.emailPlaceholder = changeWording.sentences.emailPlaceholder
      this.languageInputTitle = changeWording.sentences.languageInputTitle
      this.languagePlaceholder = changeWording.sentences.languagePlaceholder
      this.userTypeInputTitle = changeWording.sentences.userTypeInputTitle
      this.userTypePlaceholder = changeWording.sentences.userTypePlaceholder
      this.passwordInputTitle = changeWording.sentences.passwordInputTitle
      this.passwordPlaceholder = changeWording.sentences.passwordPlaceholder
      this.passwordInputControl = changeWording.sentences.passwordInputControl
      this.registerInstructionButton = changeWording.sentences.registerInstructionButton
    }
  }

  // selectLanguage(e) {
  //   this.selectedLanguage = e.target.value.charAt(0).toUpperCase() + e.target.value.substring(1).toLowerCase()
  //   this.targets.map(el => {
  //     if (el.name.includes(this.selectedLanguage)) {
  //       this.chosenLanguage = el.code;
  //     }
  //   })
  // }

  public register() {
    this.auth.register(this.registerForm.value).subscribe(
      data => {
        this.isSuccessful = true
        this.isSignUpFailed = false
        this.newUser = data
        this.router.navigate([`profile`])
      },
      error => {
        this.errorMessage = error.error.message
        this.isSignUpFailed = true
      }
    )
  }

}
