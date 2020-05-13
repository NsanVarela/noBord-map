import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { AuthenticationService } from "src/app/_services/authentication.service";
import { SharedService } from "src/app/shared/common/shared-service";
import { VOCABULARY } from "src/assets/data/vocabulary";
import { UserModel } from "src/app/_models/user";
import { WorkflowService } from 'src/app/_services/workflow.service';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  private user: UserModel = new UserModel();
  private languageChoice: string;

  public loginTitle: string;
  public emailInputTitle: string;
  public emailPlaceholder: string;
  public languageInputTitle: string;
  public languagePlaceholder: string;
  public userTypeInputTitle: string;
  public userTypePlaceholder: string;
  public passwordInputTitle: string;
  public passwordPlaceholder: string;
  public passwordInputControl: string;
  public loginInstructionButton: string;
  public loginForm: FormGroup;
  public hide: boolean = true;
  public isLoggedIn = false;
  // public isLoginFailed = false
  // public errorMessage = ``

  public language: string;
  public userType: string;

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthenticationService,
    private router: Router,
    private sharedService: SharedService,
    private workflow: WorkflowService
  ) {}

  ngOnInit(): void {
    const user = this.workflow.getUser();
    const userIsoCode = this.workflow.getUserIsoCode();
    this.language = this.workflow.getUserLanguage();
    this.userType = user.userTypeSession
    this.loginForm = this.formBuilder.group({
      email: [this.user.email, [Validators.required, Validators.minLength(2)]],
      language: this.language,
      userType: this.userType,
      password: [ this.user.password, [Validators.required, Validators.minLength(4)]]
    });

    this.loginTitle = VOCABULARY.find((v) => v.isoCode === userIsoCode).sentences.loginTitle;
    this.emailInputTitle = VOCABULARY.find((v) => v.isoCode === userIsoCode).sentences.emailInputTitle;
    this.emailPlaceholder = VOCABULARY.find((v) => v.isoCode === userIsoCode).sentences.emailPlaceholder;
    this.languageInputTitle = VOCABULARY.find((v) => v.isoCode === userIsoCode).sentences.languageInputTitle;
    this.languagePlaceholder = VOCABULARY.find((v) => v.isoCode === userIsoCode).sentences.languagePlaceholder;
    this.userTypeInputTitle = VOCABULARY.find((v) => v.isoCode === userIsoCode).sentences.userTypeInputTitle;
    this.userTypePlaceholder = VOCABULARY.find((v) => v.isoCode === userIsoCode).sentences.userTypePlaceholder;
    this.passwordInputTitle = VOCABULARY.find((v) => v.isoCode === userIsoCode).sentences.passwordInputTitle;
    this.passwordPlaceholder = VOCABULARY.find((v) => v.isoCode === userIsoCode).sentences.passwordPlaceholder;
    this.passwordInputControl = VOCABULARY.find((v) => v.isoCode === userIsoCode).sentences.passwordInputControl;
    this.loginInstructionButton = VOCABULARY.find((v) => v.isoCode === userIsoCode).sentences.loginInstructionButton;
  }

  ngAfterContentChecked() {
      this.languageChoice = this.sharedService.languageChoice
      if (this.languageChoice !== undefined) {
      const changeWording = VOCABULARY.find((v) => v.isoCode === this.languageChoice);
      this.loginTitle = changeWording.sentences.loginTitle;
      this.emailInputTitle = changeWording.sentences.emailInputTitle;
      this.emailPlaceholder = changeWording.sentences.emailPlaceholder;
      this.languageInputTitle = changeWording.sentences.languageInputTitle;
      this.languagePlaceholder = changeWording.sentences.languagePlaceholder;
      this.userTypeInputTitle = changeWording.sentences.userTypeInputTitle;
      this.userTypePlaceholder = changeWording.sentences.userTypePlaceholder;
      this.passwordInputTitle = changeWording.sentences.passwordInputTitle;
      this.passwordPlaceholder = changeWording.sentences.passwordPlaceholder;
      this.passwordInputControl = changeWording.sentences.passwordInputControl;
      this.loginInstructionButton = changeWording.sentences.loginInstructionButton;
    }
  }

  public login() {
    this.auth.login(this.loginForm.value).subscribe(
      () => {
        this.user = this.auth.getUserDetails();
        // const token = this.auth.getToken()
        // console.log('token from getToken : ', token)
        this.router.navigate([`profile`], { queryParams: this.user });
        this.isLoggedIn = true;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  private reloadPage() {
    window.location.reload();
  }
}
