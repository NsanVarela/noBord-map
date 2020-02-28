import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  opened = false
  toggleBtnMsg: string = `OUVRIR LE MENU`
  userType: string

  constructor(){
  }

  ngOnInit() {
  }

  log(state) {
    console.log(state)
    if(state == `Opened`)
      this.toggleBtnMsg = `FERMER LE MENU`
    else if(state == `Closed`)
      this.toggleBtnMsg = `OUVRIR LE MENU`
  }

  getUserType(event) {
    this.userType = event
    console.log(this.userType)
  }

}
