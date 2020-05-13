import { Component, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";
import { NavbarItem } from "src/app/_models/navbar-item";
import { AuthenticationService } from "../../_services/authentication.service";
import { VOCABULARY } from "../../../assets/data/vocabulary";
import { SharedService } from "../../shared/common/shared-service";
import { UserSession } from 'src/app/_models/user-session';
import { WorkflowService } from '../../_services/workflow.service';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent {

  @Output() type = new EventEmitter<string>();

  private languageChoice: string;
  private target: string = `fr`;
  private userToken: UserSession;
  private userType: string;

  public title: string = `Pe • TRANSLATOR`;
  public navBarItems: NavbarItem[] = [];
  public hover: boolean = false;
  public btnDe: boolean = false;
  public btnPe: boolean = false;
  public peAdvantages: boolean = false;
  public deAdvantages: boolean = false;

  public baseline: string;
  public advisorName: string;
  public candidateName: string;
  public advPeTitle: string;
  public advPeSentenceOne: string;
  public advPeSentenceTwo: string;
  public advPeSentenceThree: string;
  public advPeSentenceFour: string;
  public advCandidateTitle: string;
  public advCandidateSentenceOne: string;
  public advCandidateSentenceTwo: string;
  public advCandidateSentenceThree: string;
  public advCandidateSentenceFour: string;

  constructor(
    private router: Router,
    public auth: AuthenticationService,
    private sharedService: SharedService,
    private workflow: WorkflowService ) {
    this.setNavBar();
  }

  ngOnInit() {
    this.setNavBar();
    this.baseline = VOCABULARY.find( (v) => v.isoCode === this.target ).sentences.baseline;
    this.advisorName = VOCABULARY.find( (v) => v.isoCode === this.target ).sentences.advisorName;
    this.advPeTitle = VOCABULARY.find( (v) => v.isoCode === this.target ).sentences.advPeTitle;
    this.candidateName = VOCABULARY.find( (v) => v.isoCode === this.target ).sentences.candidateName;
    this.advPeSentenceOne = VOCABULARY.find( (v) => v.isoCode === this.target ).sentences.advPeSentenceOne;
    this.advPeSentenceTwo = VOCABULARY.find( (v) => v.isoCode === this.target ).sentences.advPeSentenceTwo;
    this.advPeSentenceThree = VOCABULARY.find( (v) => v.isoCode === this.target ).sentences.advPeSentenceThree;
    this.advPeSentenceFour = VOCABULARY.find( (v) => v.isoCode === this.target ).sentences.advPeSentenceFour;
    this.advCandidateTitle = VOCABULARY.find( (v) => v.isoCode === this.target ).sentences.advCandidateTitle;
    this.advCandidateSentenceOne = VOCABULARY.find( (v) => v.isoCode === this.target ).sentences.advCandidateSentenceOne;
    this.advCandidateSentenceTwo = VOCABULARY.find( (v) => v.isoCode === this.target ).sentences.advCandidateSentenceTwo;
    this.advCandidateSentenceThree = VOCABULARY.find( (v) => v.isoCode === this.target ).sentences.advCandidateSentenceThree;
    this.advCandidateSentenceFour = VOCABULARY.find( (v) => v.isoCode === this.target ).sentences.advCandidateSentenceFour;
  }

  private setNavBar(): void {}

  ngAfterContentChecked() {
    this.languageChoice = this.sharedService.languageChoice;
    if (this.languageChoice !== undefined) {
      const changeWording = VOCABULARY.find( (v) => v.isoCode === this.languageChoice );
      this.baseline = changeWording.sentences.baseline;
      this.advisorName = changeWording.sentences.advisorName;
      this.candidateName = changeWording.sentences.candidateName;
      this.advPeTitle = changeWording.sentences.advPeTitle;
      this.advPeSentenceOne = changeWording.sentences.advPeSentenceOne;
      this.advPeSentenceTwo = changeWording.sentences.advPeSentenceTwo;
      this.advPeSentenceThree = changeWording.sentences.advPeSentenceThree;
      this.advPeSentenceFour = changeWording.sentences.advPeSentenceFour;
      this.advCandidateTitle = changeWording.sentences.advCandidateTitle;
      this.advCandidateSentenceOne = changeWording.sentences.advPeSentenceOne;
      this.advCandidateSentenceTwo = changeWording.sentences.advPeSentenceTwo;
      this.advCandidateSentenceThree = changeWording.sentences.advPeSentenceThree;
      this.advCandidateSentenceFour = changeWording.sentences.advPeSentenceFour;
    }
  }

  public handleClick(event: any) {
    this.userType = event.currentTarget.value;
    if (this.userType !== null && this.userType == 'PE') {
      this.target = `fr`;
      this.userToken = {
        userTypeSession: this.userType,
        userLanguageSession: this.target
      }
      this.workflow.setUser(this.userToken)
      this.router.navigateByUrl(`auth`);
    } else if (this.languageChoice == undefined && this.userType == 'DE') {
      this.target = `fr`;
      this.userToken = {
        userTypeSession: this.userType,
        userLanguageSession: this.target
      }
      this.workflow.setUser(this.userToken)
      this.router.navigateByUrl(`map`);
    } else if (this.languageChoice !== undefined && this.userType == 'DE') {
      this.target = this.languageChoice;
      this.userToken = {
        userTypeSession: this.userType,
        userLanguageSession: this.target
      }
      this.workflow.setUser(this.userToken)
      this.router.navigateByUrl(`map`);
    }

  }
}
