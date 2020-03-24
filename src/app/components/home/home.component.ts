import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title: string = `Pe • TRANSLATOR`
  userType: string
  @Output() type = new EventEmitter<string>()

  constructor() { }

  ngOnInit() { }

  handleClick(event: any) {
    this.userType = event.currentTarget.value
    this.type.emit(this.userType)
  }

}
