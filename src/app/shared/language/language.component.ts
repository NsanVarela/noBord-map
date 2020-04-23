import { Component, OnInit } from '@angular/core'
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
    return this.countries.filter(option =>
      option.countryNameNative.toLowerCase().includes(filterValue))
  }

  public displayFn(subject) {
    console.log('subject : ', subject)
    return subject ? subject.countryNameNative : undefined
  }

  public confirm() {
    this.dialogRef.close()
  }

  public cancel() {
    this.dialogRef.close()
  }

}
