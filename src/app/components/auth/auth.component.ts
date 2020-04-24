import { Component, OnInit } from '@angular/core';
import { NavbarItem } from 'src/app/_models/navbar-item';
import { AuthenticationService } from '../../_services/authentication.service';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/shared/common/shared-service';
import { VOCABULARY } from '../../../assets/data/vocabulary';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  private languageChoice: string
  
  protected show: boolean

  public navBarItems: NavbarItem[] = []
  public registerInstructionTitle: string
  public loginInstructionTitle: string
  public registerInstruction: string
  public loginInstruction: string
  public registerInstructionButton: string
  public loginInstructionButton: string

  constructor( public auth: AuthenticationService, private route: ActivatedRoute, private sharedService: SharedService ) {
    this._setNavBar()
  }

  ngOnInit() {
    this.show = true
    const language = this.route.snapshot.params.language

    this.registerInstructionTitle = VOCABULARY.find( (v) => v.isoCode === `fr-FR` ).sentences.registerInstructionTitle
    this.loginInstructionTitle = VOCABULARY.find( (v) => v.isoCode === `fr-FR` ).sentences.loginInstructionTitle
    this.registerInstruction = VOCABULARY.find( (v) => v.isoCode === `fr-FR` ).sentences.registerInstruction
    this.loginInstruction = VOCABULARY.find( (v) => v.isoCode === `fr-FR` ).sentences.loginInstruction
    this.registerInstructionButton = VOCABULARY.find( (v) => v.isoCode === `fr-FR` ).sentences.registerInstructionButton
    this.loginInstructionButton = VOCABULARY.find( (v) => v.isoCode === `fr-FR` ).sentences.loginInstructionButton
  }

  private _setNavBar(): void {
    if(!this.auth.isLoggedIn()) {
      this.navBarItems = [
        {
          icon: `assets/icons/home_app.svg`,
          // infoTitle: `HOME`,
          link: `home`,
          isDisplayed: true
        },
        {
          icon: `assets/icons/settings.svg`,
          // infoTitle: `PARAMÈTRES`,
          link: `profile`,
          isDisplayed: true
        }
      ]
    } else {
      this.navBarItems = [
        {
          icon: `assets/icons/home_app.svg`,
          // infoTitle: `HOME`,
          link: `home`,
          isDisplayed: true
        },
        {
          icon: `assets/icons/language.svg`,
          // infoTitle: `MAP`,
          link: `map`,
          isDisplayed: true
        },
        {
          icon: `assets/icons/translate.svg`,
          // infoTitle: `CHAT`,
          link: `chat`,
          isDisplayed: true
        },
        {
          icon: `assets/icons/settings.svg`,
          // infoTitle: `PARAMÈTRES`,
          link: `profile`,
          isDisplayed: true
        },
        {
          icon: `assets/icons/exit_app.svg`,
          // infoTitle: `DECONNEXION`,
          link: `logout`,
          isDisplayed: true
        }
      ]
    }
  }

  ngAfterContentChecked() {
    this.languageChoice = this.sharedService.languageChoice
    if (this.languageChoice !== undefined) {
      const changeWording = VOCABULARY.find( (v) => v.isoCode === this.languageChoice )
      this.registerInstructionTitle = changeWording.sentences.registerInstructionTitle
      this.loginInstructionTitle = changeWording.sentences.loginInstructionTitle
      this.registerInstruction = changeWording.sentences.registerInstruction
      this.loginInstruction = changeWording.sentences.loginInstruction
      this.registerInstructionButton = changeWording.sentences.registerInstructionButton
      this.loginInstructionButton = changeWording.sentences.loginInstructionButton
    }
  }

  public toRegister(): boolean {
    return this.show = true

  }

  public toLogin(): boolean {
    return this.show = false
  }

}
