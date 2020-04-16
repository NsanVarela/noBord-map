import { Component, Output, EventEmitter } from '@angular/core';
import { NavbarItem } from 'src/app/_models/navbar-item';
import { AuthenticationService } from '../../_services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @Output() type = new EventEmitter<string>()

  public title: string = `Pe • TRANSLATOR`
  public userType: string
  public navBarItems: NavbarItem[] = []

  constructor(public auth: AuthenticationService) {
    this.setNavBar()
  }

  public setNavBar(): void {
    this.navBarItems = [
      {
        icon: `assets/icons/settings.svg`,
        infoTitle: `PARAMÈTRES`,
        link: `profile`,
        isDisplayed: true
      }
    ]
  }

  public handleClick(event: any) {
    this.userType = event.currentTarget.value
    this.type.emit(this.userType)
  }

}
