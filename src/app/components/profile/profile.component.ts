import { Component, OnInit, NgModule } from '@angular/core';

import { AuthenticationService, UserDetails } from '../../_services/authentication.service';
import { NavbarItem } from 'src/app/_models/navbar-item'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserModel } from 'src/app/_models/user';
import { LanguageComponent } from '../../shared/components/language/language.component';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public navBarItems: NavbarItem[] = []
  public toEdit: boolean = false
  public details: UserDetails
  public pseudoValue: string = ``
  public ageValue: number = null
  public emailValue: string = ``
  public passwordValue: string = ``
  public phoneValue: number = null
  public languageValue: string = ``
  public professionValue: string = ``
  public experienceValue: number = null
  public countryValue: string = ``
  public descriptionValue: string = ``
  public softSkillsValue: string = ``
  public updateForm: FormGroup
  private user: UserModel = new UserModel()

  private userToRetrieve
  private userToEdit

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthenticationService
  ) {
    this.setNavBar()
  }

  ngOnInit() {
    this.userToRetrieve = this.auth.getUserDetails();
    this.auth.profile(this.userToRetrieve).subscribe(
      user => {
        this.details = user.data
        this.pseudoValue = this.details.username
        this.ageValue = this.details.age
        this.emailValue = this.details.email
        this.passwordValue = this.details.password
        this.phoneValue = this.details.phone
        this.languageValue = this.details.language
        this.professionValue = this.details.profession
        this.experienceValue = this.details.experience
        this.countryValue = this.details.country
        this.descriptionValue = this.details.description
        this.softSkillsValue = this.details.skills
        this.updateForm = this.formBuilder.group({
          pseudo: [this.details.username, [Validators.required]],
          age: [this.details.age, [Validators.required]],
          email: [this.details.email, [Validators.required]],
          password: [this.details.password, [Validators.required]],
          phone: [this.details.phone, [Validators.required]],
          language: [this.details.language, [Validators.required]],
          profession: [this.details.profession, [Validators.required]],
          experience: [this.details.experience, [Validators.required]],
          country: [this.details.country, [Validators.required]],
          description: [this.details.description, [Validators.required]],
          skills: [this.details.skills, [Validators.required]]
        });
      },
      err => {
        console.log(err)
      }
    )
  }

  public setNavBar(): void {
    if(!this.auth.isLoggedIn()) {
      this.navBarItems = [
        {
          icon: `assets/icons/home_app.svg`,
          // infoTitle: `HOME`,
          link: `home`,
          isDisplayed: true
        }
      ]
    } else {
      this.navBarItems = [
        {
          icon: `assets/icons/home_app.svg`,
          // infoTitle: `HOME`,
          link: `home`,
          isDisplayed: true
        },
        {
          icon: `assets/icons/language.svg`,
          // infoTitle: `MAP`,
          link: `map`,
          isDisplayed: true
        },
        {
          icon: `assets/icons/chat.svg`,
          // infoTitle: `CHAT`,
          link: `chat`,
          isDisplayed: true
        },
        {
          icon: `assets/icons/exit_app.svg`,
          // infoTitle: `DECONNEXION`,
          link: `logout`,
          isDisplayed: false
        }
      ]
    }
  }

  private ngAfterContentChecked() {
    if(this.details !== undefined) {
      this.languageValue == this.details.language
    }
  }

  public displayProfil() {
    this.toEdit = true
    this.auth.profile(this.userToRetrieve).subscribe(
      (result) => {
        this.userToEdit = result;
      })
  }

  public editProfil() {
    const user = {
      id: this.userToEdit.data.id,
      password: this.updateForm.value.password,
      username: this.updateForm.value.pseudo,
      age: this.updateForm.value.age,
      email: this.updateForm.value.email,
      phone: this.updateForm.value.phone,
      language: this.updateForm.value.language,
      profession: this.updateForm.value.profession,
      experience: this.updateForm.value.experience,
      country: this.updateForm.value.country,
      description: this.updateForm.value.description,
      skills: this.updateForm.value.skills
    }
    this.auth.edit(user).subscribe(
      () => {
        this.user = this.auth.getUserDetails()
      },
      (err) => {
        console.log(err)
      }
    )
  }

}
