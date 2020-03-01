import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  protected userType: string
  protected countryName: string

  constructor(){
  }

  ngOnInit() {}

  getUserType(event) {
    this.userType = event
  }

  getCountryName(event) {
    this.countryName = event
  }

}
