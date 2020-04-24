import { Component, Output, EventEmitter } from "@angular/core";
import { NavbarItem } from "src/app/_models/navbar-item";
import { AuthenticationService } from "../../_services/authentication.service";
import { VOCABULARY } from "../../../assets/data/vocabulary";
import { SharedService } from "../../shared/common/shared-service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
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
  public languageChoice: string
  public baseline: string
  public advisorName: string
  public candidateName: string
  public advPeTitle: string
  public advPeSentenceOne: string
  public advPeSentenceTwo: string
  public advPeSentenceThree: string
  public advPeSentenceFour: string
  public advCandidateTitle: string
  public advCandidateSentenceOne: string
  public advCandidateSentenceTwo: string
  public advCandidateSentenceThree: string
  public advCandidateSentenceFour: string

  constructor( public auth: AuthenticationService, private sharedService: SharedService ) {
    this.setNavBar()
  }

  ngOnInit() {
    this.setNavBar()
    this.baseline = VOCABULARY.find( (v) => v.isoCode === `fr-FR` ).sentences.baseline;
    this.advisorName = VOCABULARY.find( (v) => v.isoCode === `fr-FR` ).sentences.advisorName;
    this.advPeTitle = VOCABULARY.find( (v) => v.isoCode === `fr-FR` ).sentences.advPeTitle;
    this.candidateName = VOCABULARY.find( (v) => v.isoCode === `fr-FR` ).sentences.candidateName;
    this.advPeSentenceOne = VOCABULARY.find( (v) => v.isoCode === `fr-FR` ).sentences.advPeSentenceOne;
    this.advPeSentenceTwo = VOCABULARY.find( (v) => v.isoCode === `fr-FR` ).sentences.advPeSentenceTwo;
    this.advPeSentenceThree = VOCABULARY.find( (v) => v.isoCode === `fr-FR` ).sentences.advPeSentenceThree;
    this.advPeSentenceFour = VOCABULARY.find( (v) => v.isoCode === `fr-FR` ).sentences.advPeSentenceFour;
    this.advCandidateTitle = VOCABULARY.find( (v) => v.isoCode === `fr-FR` ).sentences.advCandidateTitle;
    this.advCandidateSentenceOne = VOCABULARY.find( (v) => v.isoCode === `fr-FR` ).sentences.advCandidateSentenceOne;
    this.advCandidateSentenceTwo = VOCABULARY.find( (v) => v.isoCode === `fr-FR` ).sentences.advCandidateSentenceTwo;
    this.advCandidateSentenceThree = VOCABULARY.find( (v) => v.isoCode === `fr-FR` ).sentences.advCandidateSentenceThree;
    this.advCandidateSentenceFour = VOCABULARY.find( (v) => v.isoCode === `fr-FR` ).sentences.advCandidateSentenceFour;
  }

  private setNavBar(): void {}

  ngAfterContentChecked() {
    this.languageChoice = this.sharedService.languageChoice
    
    if (this.languageChoice !== undefined) {
      const changeWording = VOCABULARY.find( (v) => v.isoCode === this.languageChoice )
      this.baseline = changeWording.sentences.baseline;
      this.advisorName = changeWording.sentences.advisorName
      this.candidateName = changeWording.sentences.candidateName
      this.advPeTitle = changeWording.sentences.advPeTitle
      this.advPeSentenceOne = changeWording.sentences.advPeSentenceOne
      this.advPeSentenceTwo = changeWording.sentences.advPeSentenceTwo
      this.advPeSentenceThree = changeWording.sentences.advPeSentenceThree
      this.advPeSentenceFour = changeWording.sentences.advPeSentenceFour
      this.advCandidateTitle = changeWording.sentences.advCandidateTitle
      this.advCandidateSentenceOne = changeWording.sentences.advPeSentenceOne
      this.advCandidateSentenceTwo = changeWording.sentences.advPeSentenceTwo
      this.advCandidateSentenceThree = changeWording.sentences.advPeSentenceThree
      this.advCandidateSentenceFour = changeWording.sentences.advPeSentenceFour
    }
  }

  public handleClick(event: any) {
    this.userType = event.currentTarget.value;
    console.log("userType : ", this.userType);
    this.type.emit(this.userType);
  }
}
