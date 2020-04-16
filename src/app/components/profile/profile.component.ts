import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { AuthenticationService, UserDetails } from '../../_services/authentication.service';
import { NavbarItem } from 'src/app/_models/navbar-item'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  public navBarItems: NavbarItem[] = []
  public details: UserDetails

  constructor(
    private auth: AuthenticationService
  ) {
    this.setNavBar()
  }

  ngOnInit() {
    this.auth.profile().subscribe(
      user => {
        this.details = user
        console.log('details : ', this.details)
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
          icon: `assets/icons/translate.svg`,
          infoTitle: `CHAT`,
          link: `chat`,
          isDisplayed: true
        },
        {
          icon: `assets/icons/settings.svg`,
          infoTitle: `PARAMÈTRES`,
          link: `profile`,
          isDisplayed: true
        },
        {
          icon: `assets/icons/exit_app.svg`,
          infoTitle: `DECONNEXION`,
          link: `logout`,
          isDisplayed: true
        }
      ]
    }
  }

}
