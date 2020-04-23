import { Component, Output, EventEmitter } from '@angular/core';
import { NavbarItem } from 'src/app/_models/navbar-item';
import { AuthenticationService } from '../../_services/authentication.service';
import { VOCABULARY } from '../../../assets/data/vocabulary';

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
  public hover: boolean = false
  public btnDe: boolean = false
  public btnPe: boolean = false
  public peAdvantages: boolean = false
  public deAdvantages: boolean = false
  public advisorBtnValue: string

  constructor(public auth: AuthenticationService) {
    this.setNavBar()
  }

  ngOnInit() {
    this.setNavBar()
    this.advisorBtnValue = VOCABULARY.find((v) => v.isoCode === `en-GB`).sentences.advisorName

  }

  public setNavBar(): void {
    // this.navBarItems = [
    //   {
    //     icon: `assets/icons/settings.svg`,
    //     infoTitle: `PARAMÈTRES`,
    //     link: `profile`,
    //     isDisplayed: true
    //   }
    // ]
  }

  public handleClick(event: any) {
    this.userType = event.currentTarget.value
    console.log('userType : ', this.userType)
    this.type.emit(this.userType)
  }

}
