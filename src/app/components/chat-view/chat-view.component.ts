import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder } from "@angular/forms";
import { LanguageService } from '../../_services/language.service';
import { WebsocketService } from "../../_services/websocket.service";
import { Languages } from "../../_models/languages";
import { NewMessage } from "../../_models/new-message";
import { NavbarItem } from 'src/app/_models/navbar-item';
import { AuthenticationService } from '../../_services/authentication.service';

@Component({
  selector: `app-chat-view`,
  templateUrl: `./chat-view.component.html`,
  styleUrls: [`./chat-view.component.scss`]
})
export class ChatViewComponent implements OnInit {
  protected selectedLanguage: string
  protected translationButton: string = `Tranduire en...`
  protected languages: Languages[]
  protected sender: string
  protected message: string
  protected receivedMsg: string
  protected date = new Date()
  protected target: string = `es`
  protected provider: string = `GOOGLE` // `GOOGLE`, `MICROSOFT` or `ALL`
  protected changeTrad
  protected selectOption: string = `Sélectionnez une langue`
  protected newLanguage: string
  protected userLanguage: string = `french`
  public messages = []
  public users = []
  public navBarItems: NavbarItem[] = []

  constructor(
    private router: Router,
    private languageService: LanguageService,
    private websocketService: WebsocketService,
    public formBuilder: FormBuilder,
    public auth: AuthenticationService
  ) {
    this.setNavBar()
  }

  ngOnInit() {
    const id: string = sessionStorage.getItem("id");
    const language: string = sessionStorage.getItem("language");
    this.websocketService.ngOnInit().subscribe({
      next: data => {
        if (data && data.outgoingMsg.message != undefined) {
          this.sender = data.outgoingMsg.name;
          this.message = data.outgoingMsg.message;
          this.userLanguage = data.outgoingMsg.language;
          this.target = language;
          this.provider = `GOOGLE`;
          this.getTranslation(this.message, this.target, this.provider);
        }
      }
    });
  }

  public setNavBar(): void {
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
          icon: `assets/icons/chat.svg`,
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
        // {
        //   icon: `assets/icons/exit_app.svg`,
        //   infoTitle: `DECONNEXION`,
        //   link: `logout`,
        //   isDisplayed: true
        // }
      ]
    }
  }

  public getTranslation(text, target, provider) {
    this.languageService.getTranslation(text, target, provider).subscribe({
      next: data => {
        this.receivedMsg = data.data.translate[0].text;
        this.provider = data.data.translate[0].provider;
        this.messages.push(
          new NewMessage(
            this.receivedMsg,
            this.provider,
            this.sender,
            this.userLanguage
          )
        );
      }
    });
  }

  public onSignOut() {
    sessionStorage.removeItem(`id`);
    sessionStorage.removeItem(`name`);
    sessionStorage.removeItem(`password`);
    this.router.navigate([`auth`]);
  }
}
