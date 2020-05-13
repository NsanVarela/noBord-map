import { Component, OnInit } from "@angular/core";
import { NavbarItem } from "src/app/_models/navbar-item";
import { VOCABULARY } from "../../../assets/data/vocabulary";
import { AuthenticationService } from "../../_services/authentication.service";
import { SharedService } from "src/app/shared/common/shared-service";
import { WorkflowService } from 'src/app/_services/workflow.service';

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.scss"],
})
export class AuthComponent implements OnInit {
  private languageChoice: string;
  protected show: boolean;

  public navBarItems: NavbarItem[] = [];
  public registerInstructionTitle: string;
  public loginInstructionTitle: string;
  public registerInstruction: string;
  public loginInstruction: string;
  public registerInstructionButton: string;
  public loginInstructionButton: string;

  constructor(
    public auth: AuthenticationService,
    private sharedService: SharedService,
    private workflow: WorkflowService
  ) {
    this._setNavBar();
  }

  ngOnInit() {
    this.show = true;
    const language = this.workflow.getUserIsoCode();
    this.registerInstructionTitle = VOCABULARY.find((v) => v.isoCode === language).sentences.registerInstructionTitle;
    this.loginInstructionTitle = VOCABULARY.find((v) => v.isoCode === language).sentences.loginInstructionTitle;
    this.registerInstruction = VOCABULARY.find((v) => v.isoCode === language).sentences.registerInstruction;
    this.loginInstruction = VOCABULARY.find((v) => v.isoCode === language).sentences.loginInstruction;
    this.registerInstructionButton = VOCABULARY.find((v) => v.isoCode === language).sentences.registerInstructionButton;
    this.loginInstructionButton = VOCABULARY.find((v) => v.isoCode === language).sentences.loginInstructionButton;
  }

  private _setNavBar(): void {
    if (!this.auth.isLoggedIn()) {
      this.navBarItems = [
        {
          icon: `assets/icons/home_app.svg`,
          // infoTitle: `HOME`,
          link: `home`,
          isDisplayed: true,
        },
        {
          icon: `assets/icons/settings.svg`,
          // infoTitle: `PARAMÈTRES`,
          link: `profile`,
          isDisplayed: true,
        },
      ];
    } else {
      this.navBarItems = [
        {
          icon: `assets/icons/home_app.svg`,
          // infoTitle: `HOME`,
          link: `home`,
          isDisplayed: true,
        },
        {
          icon: `assets/icons/language.svg`,
          // infoTitle: `MAP`,
          link: `map`,
          isDisplayed: true,
        },
        {
          icon: `assets/icons/chat.svg`,
          // infoTitle: `CHAT`,
          link: `chat`,
          isDisplayed: true,
        },
        {
          icon: `assets/icons/settings.svg`,
          // infoTitle: `PARAMÈTRES`,
          link: `profile`,
          isDisplayed: true,
        },
        // {
        //   icon: `assets/icons/exit_app.svg`,
        //   // infoTitle: `DECONNEXION`,
        //   link: `logout`,
        //   isDisplayed: true
        // }
      ];
    }
  }

  ngAfterContentChecked() {
    this.languageChoice = this.sharedService.languageChoice
    if (this.languageChoice !== undefined) {
      const changeWording = VOCABULARY.find((v) => v.isoCode === this.languageChoice);
      this.registerInstructionTitle = changeWording.sentences.registerInstructionTitle;
      this.loginInstructionTitle = changeWording.sentences.loginInstructionTitle;
      this.registerInstruction = changeWording.sentences.registerInstruction;
      this.loginInstruction = changeWording.sentences.loginInstruction;
      this.registerInstructionButton = changeWording.sentences.registerInstructionButton;
      this.loginInstructionButton = changeWording.sentences.loginInstructionButton;
    }
  }

  public toRegister(): boolean {
    return (this.show = true);
  }

  public toLogin(): boolean {
    return (this.show = false);
  }
}
