import { Component, OnInit, Output, EventEmitter } from '@angular/core'
import { MatDialogRef } from '@angular/material'
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

import { VOCABULARY } from '../../../assets/data/vocabulary';
import { Vocabulary } from '../../_models/wording';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {

  @Output() isoCode = new EventEmitter()

  public myCtrl = new FormControl()
  public filteredCountries: Observable<Vocabulary[]>
  public countries: Vocabulary[] = VOCABULARY
  public flag: string = 'fr'


  constructor (
    private dialogRef: MatDialogRef<LanguageComponent>
  ) {}

  ngOnInit() {
    this.filteredCountries = this.myCtrl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    )
  }

  private _filter(value: string): Vocabulary[] {
    const filterValue = value.toLowerCase()
    return this.countries.filter(
      option => option.countryNameNative.toLowerCase().includes(filterValue)
    )
  }

  public displayFn(subject) {
    if (subject !== null) {
      subject ? subject.countryNameNative : undefined
      // console.log('iso : ', subject.isoCode)
      // this.isoCode.emit(subject.isoCode)
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
