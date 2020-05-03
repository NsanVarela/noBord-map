import { Component, OnInit, NgModule } from "@angular/core";

import {
  AuthenticationService,
  UserDetails,
} from "../../_services/authentication.service";
import { NavbarItem } from "src/app/_models/navbar-item";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { UserModel } from "src/app/_models/user";
import { LanguageComponent } from "../../shared/components/language/language.component";
import { map } from "rxjs/operators";
import { SharedService } from "src/app/shared/common/shared-service";
import { VOCABULARY } from '../../../assets/data/vocabulary';

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent implements OnInit {
  public navBarItems: NavbarItem[] = [];
  public toEdit: boolean = false;
  public details: UserDetails;
  public pseudoValue: string = ``;
  public ageValue: number = null;
  public emailValue: string = ``;
  public passwordValue: string = ``;
  public phoneValue: number = null;
  public languageValue: string = ``;
  public professionValue: string = ``;
  public experienceValue: number = null;
  public countryValue: string = ``;
  public descriptionValue: string = ``;
  public softSkillsValue: string = ``;
  public updateForm: FormGroup;

  // TRANSLATED PROPERTIES
  public age: string;
  public experience: string;
  public language: string;
  public header1: string;
  public header2: string;
  public header3: string;
  public header4: string;
  public advisor: string;
  public meeting: string;
  public updatePseudo: string;
  public updatePseudoPlaceholder: string;
  public updateAge: string;
  public updateAgePlaceholder: string;
  public updateEmail: string;
  public updateEmailPlaceholder: string;
  public updatePassword: string;
  public updatePasswordPlaceholder: string;
  public updatePhone: string;
  public updatePhonePlaceholder: string;
  public updateLanguage: string;
  public updateLanguagePlaceholder: string;
  public updateProfession: string;
  public updateProfessionPlaceholder: string;
  public updateExperience: string;
  public updateExperiencePlaceholder: string;
  public updateCountry: string;
  public updateCountryPlaceholder: string;
  public updateDescription: string;
  public updateDescriptionPlaceholder: string;
  public updateSkills: string;
  public updateSkillsPlaceholder: string;

  private user: UserModel = new UserModel();
  private userToRetrieve;
  private userToEdit;
  private languageChoice: string;

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthenticationService,
    private sharedService: SharedService
  ) {
    this.setNavBar();
  }

  ngOnInit() {
    this.userToRetrieve = this.auth.getUserDetails();
    this.auth.profile(this.userToRetrieve).subscribe(
      (user) => {
        (this.details = user.data),
          (this.pseudoValue = this.details.username),
          (this.ageValue = this.details.age),
          (this.emailValue = this.details.email),
          (this.passwordValue = this.details.password),
          (this.phoneValue = this.details.phone),
          (this.languageValue = this.details.language),
          (this.professionValue = this.details.profession),
          (this.experienceValue = this.details.experience),
          (this.countryValue = this.details.country),
          (this.descriptionValue = this.details.description),
          (this.softSkillsValue = this.details.skills),
          (this.updateForm = this.formBuilder.group({
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
            skills: [this.details.skills, [Validators.required]],
          }));
      },
      (err) => {
        console.log(err);
      }
    );

    this.age = VOCABULARY.find((v) => v.isoCode === `fr-FR`).sentences.age
    this.experience = VOCABULARY.find((v) => v.isoCode === `fr-FR`).sentences.experience
    this.language = VOCABULARY.find((v) => v.isoCode === `fr-FR`).sentences.language
    this.header1 = VOCABULARY.find((v) => v.isoCode === `fr-FR`).sentences.header1
    this.header2 = VOCABULARY.find((v) => v.isoCode === `fr-FR`).sentences.header2
    this.header3 = VOCABULARY.find((v) => v.isoCode === `fr-FR`).sentences.header3
    this.header4 = VOCABULARY.find((v) => v.isoCode === `fr-FR`).sentences.header4
    this.advisor = VOCABULARY.find((v) => v.isoCode === `fr-FR`).sentences.advisor
    this.meeting = VOCABULARY.find((v) => v.isoCode === `fr-FR`).sentences.meeting
    this.updatePseudo = VOCABULARY.find((v) => v.isoCode === `fr-FR`).sentences.updatePseudo
    this.updatePseudoPlaceholder = VOCABULARY.find((v) => v.isoCode === `fr-FR`).sentences.updatePseudoPlaceholder
    this.updateAge = VOCABULARY.find((v) => v.isoCode === `fr-FR`).sentences.updateAge
    this.updateAgePlaceholder = VOCABULARY.find((v) => v.isoCode === `fr-FR`).sentences.updateAgePlaceholder
    this.updateEmail = VOCABULARY.find((v) => v.isoCode === `fr-FR`).sentences.updateEmail
    this.updateEmailPlaceholder = VOCABULARY.find((v) => v.isoCode === `fr-FR`).sentences.updateEmailPlaceholder
    this.updatePassword = VOCABULARY.find((v) => v.isoCode === `fr-FR`).sentences.updatePassword
    this.updatePasswordPlaceholder = VOCABULARY.find((v) => v.isoCode === `fr-FR`).sentences.updatePasswordPlaceholder
    this.updatePhone = VOCABULARY.find((v) => v.isoCode === `fr-FR`).sentences.updatePhone
    this.updatePhonePlaceholder = VOCABULARY.find((v) => v.isoCode === `fr-FR`).sentences.updatePhonePlaceholder
    this.updateLanguage = VOCABULARY.find((v) => v.isoCode === `fr-FR`).sentences.updateLanguage
    this.updateLanguagePlaceholder = VOCABULARY.find((v) => v.isoCode === `fr-FR`).sentences.updateLanguagePlaceholder
    this.updateProfession = VOCABULARY.find((v) => v.isoCode === `fr-FR`).sentences.updateProfession
    this.updateProfessionPlaceholder = VOCABULARY.find((v) => v.isoCode === `fr-FR`).sentences.updateProfessionPlaceholder
    this.updateExperience = VOCABULARY.find((v) => v.isoCode === `fr-FR`).sentences.updateExperience
    this.updateExperiencePlaceholder = VOCABULARY.find((v) => v.isoCode === `fr-FR`).sentences.updateExperiencePlaceholder
    this.updateCountry = VOCABULARY.find((v) => v.isoCode === `fr-FR`).sentences.updateCountry
    this.updateCountryPlaceholder = VOCABULARY.find((v) => v.isoCode === `fr-FR`).sentences.updateCountryPlaceholder
    this.updateDescription = VOCABULARY.find((v) => v.isoCode === `fr-FR`).sentences.updateDescription
    this.updateDescriptionPlaceholder = VOCABULARY.find((v) => v.isoCode === `fr-FR`).sentences.updateDescriptionPlaceholder
    this.updateSkills = VOCABULARY.find((v) => v.isoCode === `fr-FR`).sentences.updateSkills
    this.updateSkillsPlaceholder = VOCABULARY.find((v) => v.isoCode === `fr-FR`).sentences.updateSkillsPlaceholder
  }

  public setNavBar(): void {
    if (!this.auth.isLoggedIn()) {
      this.navBarItems = [
        {
          icon: `assets/icons/home_app.svg`,
          // infoTitle: `HOME`,
          link: `home`,
          isDisplayed: true,
        },
      ];
    } else {
      this.navBarItems = [
        {
          icon: `assets/icons/home_app.svg`,
          // infoTitle: `HOME`,
          link: `home`,
          isDisplayed: true,
        },
        {
          icon: `assets/icons/language.svg`,
          // infoTitle: `MAP`,
          link: `map`,
          isDisplayed: true,
        },
        {
          icon: `assets/icons/chat.svg`,
          // infoTitle: `CHAT`,
          link: `chat`,
          isDisplayed: true,
        },
        {
          icon: `assets/icons/exit_app.svg`,
          // infoTitle: `DECONNEXION`,
          link: `logout`,
          isDisplayed: false,
        },
      ];
    }
  }

  private ngAfterContentChecked() {
    this.languageChoice = this.sharedService.languageChoice
    if(this.languageChoice !== undefined) {
      // this.languageValue == this.details.language;
      const changeWording = VOCABULARY.find( (v) => v.isoCode === this.languageChoice )
      this.age = changeWording.sentences.age
      this.experience = changeWording.sentences.experience
      this.language = changeWording.sentences.language
      this.header1 = changeWording.sentences.header1
      this.header2 = changeWording.sentences.header2
      this.header3 = changeWording.sentences.header3
      this.header4 = changeWording.sentences.header4
      this.advisor = changeWording.sentences.advisor
      this.meeting = changeWording.sentences.meeting
      this.updatePseudo = changeWording.sentences.updatePseudo
      this.updatePseudoPlaceholder = changeWording.sentences.updatePseudoPlaceholder
      this.updateAge = changeWording.sentences.updateAge
      this.updateAgePlaceholder = changeWording.sentences.updateAgePlaceholder
      this.updateEmail = changeWording.sentences.updateEmail
      this.updateEmailPlaceholder = changeWording.sentences.updateEmailPlaceholder
      this.updatePassword = changeWording.sentences.updatePassword
      this.updatePasswordPlaceholder = changeWording.sentences.updatePasswordPlaceholder
      this.updatePhone = changeWording.sentences.updatePhone
      this.updatePhonePlaceholder = changeWording.sentences.updatePhonePlaceholder
      this.updateLanguage = changeWording.sentences.updateLanguage
      this.updateLanguagePlaceholder = changeWording.sentences.updateLanguagePlaceholder
      this.updateProfession = changeWording.sentences.updateProfession
      this.updateProfessionPlaceholder = changeWording.sentences.updateProfessionPlaceholder
      this.updateExperience = changeWording.sentences.updateExperience
      this.updateExperiencePlaceholder = changeWording.sentences.updateExperiencePlaceholder
      this.updateCountry = changeWording.sentences.updateCountry
      this.updateCountryPlaceholder = changeWording.sentences.updateCountryPlaceholder
      this.updateDescription = changeWording.sentences.updateDescription
      this.updateDescriptionPlaceholder = changeWording.sentences.updateDescriptionPlaceholder
      this.updateSkills = changeWording.sentences.updateSkills
      this.updateSkillsPlaceholder = changeWording.sentences.updateSkillsPlaceholder
    }
  }

  public displayProfil() {
    this.toEdit = true;
    this.auth.profile(this.userToRetrieve).subscribe((result) => {
      this.userToEdit = result;
    });
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
      skills: this.updateForm.value.skills,
    };
    this.auth.edit(user).subscribe(
      () => {
        this.user = this.auth.getUserDetails();
      },
      (err) => {
        console.log(err);
      }
    );
    this.toEdit = false;
  }

  public resetUpdate() {
    
  }

}
