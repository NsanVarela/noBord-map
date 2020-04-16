import { Component, OnInit } from '@angular/core';
import { NavbarItem } from 'src/app/_models/navbar-item';
import { AuthenticationService } from '../../_services/authentication.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  protected show: boolean
  public navBarItems: NavbarItem[] = []

  constructor(public auth: AuthenticationService) {
    this.setNavBar()
  }

  ngOnInit() {
    this.show = true
  }

  public setNavBar(): void {
    if(!this.auth.isLoggedIn()) {
      this.navBarItems = [
        {
          icon: `assets/icons/home_app.svg`,
          infoTitle: `HOME`,
          link: `home`,
          isDisplayed: true
        },
        {
          icon: `assets/icons/settings.svg`,
          infoTitle: `PARAMÈTRES`,
          link: `profile`,
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

  public toRegister(): boolean {
    return this.show = true
  }

  public toLogin(): boolean {
    return this.show = false
  }

}
