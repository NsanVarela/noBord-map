import { Component, OnInit } from '@angular/core'

import { AuthenticationService, UserDetails } from '../../_services/authentication.service';
import { NavbarItem } from 'src/app/_models/navbar-item'

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
  public phoneValue: number = null
  public languageValue: string = ``
  public professionValue: string = ``
  public experienceValue: number = null
  public countryValue: string = ``
  public descriptionValue: string = ``
  public softSkillsValue: string = ``

  constructor(
    private auth: AuthenticationService
  ) {
    this.setNavBar()
  }

  ngOnInit() {
    this.auth.profile().subscribe(
      user => {
        this.details = user
        this.pseudoValue = this.details.username
        this.ageValue = this.details.age
        this.emailValue = this.details.email
        this.phoneValue = this.details.phone
        this.languageValue = this.details.language
        this.professionValue = this.details.profession
        this.experienceValue = this.details.experience
        this.countryValue = this.details.country
        this.descriptionValue = this.details.description
        this.softSkillsValue = this.details.skills
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
          infoTitle: `HOME`,
          link: `home`,
          isDisplayed: true
        }
      ]
    } else {
      this.navBarItems = [
        {
          icon: `assets/icons/home_app.svg`,
          infoTitle: `HOME`,
          link: `home`,
          isDisplayed: true
        },
        {
          icon: `assets/icons/language.svg`,
          infoTitle: `MAP`,
          link: `map`,
          isDisplayed: true
        },
        {
          icon: `assets/icons/chat.svg`,
          infoTitle: `CHAT`,
          link: `chat`,
          isDisplayed: true
        },
        {
          icon: `assets/icons/exit_app.svg`,
          infoTitle: `DECONNEXION`,
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

  public editProfil() {
    this.toEdit = true
  }

}
