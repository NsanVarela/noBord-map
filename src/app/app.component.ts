import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string = `Pe•TRANSLATOR`
  userType: string
  countryName: string

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
