import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  protected show: boolean = false

  constructor() { }

  ngOnInit() {
  }

  toRgister() {
    this.show = true
  }
  toLogin() {
    this.show = false
  }

}
