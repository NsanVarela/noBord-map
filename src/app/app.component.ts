import { Component } from '@angular/core';
import { AuthenticationService } from './_services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  protected userType: string
  protected countryName: string

  constructor(public auth: AuthenticationService) { }

  getUserType(event) {
    this.userType = event
  }

  getCountryName(event) {
    this.countryName = event
  }

}
