import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder } from "@angular/forms";
import { LanguageService } from '../../_services/language.service';
import { WebsocketService } from "../../_services/websocket.service";
import ILanguages from "../../_models/ILanguages";
import { NewMessage } from "../../_models/NewMessage";

@Component({
  selector: `app-chat-view`,
  templateUrl: `./chat-view.component.html`,
  styleUrls: [`./chat-view.component.scss`]
})
export class ChatViewComponent implements OnInit {
  protected selectedLanguage: string;
  protected translationButton: string = `Tranduire en...`;
  protected languages: ILanguages[];
  protected sender: string;
  protected message: string;
  protected receivedMsg: string;
  protected date = new Date();
  protected target: string = `es`;
  protected provider: string = `GOOGLE`; // `GOOGLE`, `MICROSOFT` or `ALL`
  protected changeTrad;
  protected selectOption: string = `Sélectionnez une langue`;
  protected newLanguage: string;
  protected userLanguage: string = `french`;
  public messages = [];
  public users = [];

  constructor(
    private router: Router,
    private languageService: LanguageService,
    private websocketService: WebsocketService,
    public formBuilder: FormBuilder
  ) {}

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

  getTranslation(text, target, provider) {
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

  onSignOut() {
    sessionStorage.removeItem(`id`);
    sessionStorage.removeItem(`name`);
    sessionStorage.removeItem(`password`);
    this.router.navigate([`auth`]);
  }
}
