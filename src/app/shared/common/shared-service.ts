import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class SharedService {

  languageChoice: string
  _languageChoiceValueBS = new BehaviorSubject<string>('')

  constructor() {
    this.languageChoice
    this._languageChoiceValueBS.next(this.languageChoice)
  }

  updateComp1Val(val) {
    this.languageChoice = val
    this._languageChoiceValueBS.next(this.languageChoice)
  }
}
