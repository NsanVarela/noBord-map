import { Component, OnInit, Output, EventEmitter } from '@angular/core'
import { MatDialogRef } from '@angular/material'
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

import { VOCABULARY } from '../../../../assets/data/vocabulary';
import { Vocabulary } from '../../../_models/wording';
import { SharedService } from '../../common/shared-service';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {

  private languageChoice: string

  public myCtrl = new FormControl()
  public filteredCountries: Observable<Vocabulary[]>
  public countries: Vocabulary[] = VOCABULARY
  public languageTitle: string
  public nativeLanguageTitle: string
  public languagePlaceholderInput: string
  public translatedLanguagePlaceholder: string
  public languageCancelBtn: string
  public languageSubmitBtn: string

  constructor (
    private dialogRef: MatDialogRef<LanguageComponent>,
    private sharedService: SharedService
  ) {
    this.sharedService.languageChoice
  }

  ngOnInit() {
    this.filteredCountries = this.myCtrl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
      )
    this.languageTitle = VOCABULARY.find( (v) => v.isoCode === `fr-FR` ).sentences.languageTitle
    this.nativeLanguageTitle = VOCABULARY.find( (v) => v.isoCode === `en-GB` ).sentences.languageTitle
    this.languagePlaceholderInput = VOCABULARY.find( (v) => v.isoCode === `fr-FR` ).sentences.languagePlaceholderInput
    this.translatedLanguagePlaceholder = VOCABULARY.find( (v) => v.isoCode === `en-GB` ).sentences.translatedLanguagePlaceholder
    this.languageCancelBtn = VOCABULARY.find( (v) => v.isoCode === `fr-FR` ).sentences.languageCancelBtn
    this.languageSubmitBtn = VOCABULARY.find( (v) => v.isoCode === `fr-FR` ).sentences.languageSubmitBtn
  }

  ngAfterContentChecked() {
    this.languageChoice = this.sharedService.languageChoice
    if (this.languageChoice !== undefined) {
      const changeWording = VOCABULARY.find( (v) => v.isoCode === this.languageChoice )
      this.nativeLanguageTitle = changeWording.sentences.languageTitle
      this.translatedLanguagePlaceholder = changeWording.sentences.translatedLanguagePlaceholder
      this.languageCancelBtn = changeWording.sentences.languageCancelBtn
      this.languageSubmitBtn = changeWording.sentences.languageSubmitBtn
    }
  }

  private _filter(value): Vocabulary[] {
    this.sharedService.updateComp1Val(value.isoCode)
    return this.countries.filter(
      option => option.countryNameNative.toLowerCase().includes(value)
    )
  }

  public displayFn(subject) {
    if (subject !== null) {
      subject ? subject.countryNameNative : undefined
      return subject.countryNameNative
    }
  }

  public confirm() {
    this.dialogRef.close()
  }

  public cancel() {
    this.dialogRef.close()
  }

}
