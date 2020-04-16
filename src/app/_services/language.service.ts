import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import axios from 'axios'

import { environment } from '../../environments/environment';
import { Languages } from '../_models/languages';

@Injectable({
  providedIn: "root"
})
export class LanguageService {

  protected languages: Languages;

  public changeTranslation(text: string, target: string, provider: string) {
    const data = {
      query: `
      {
        translate(text:"${text}",target:"${target}", provider:${provider}) {
          text,
          provider
        }
      }`
    }
    let observable$ = Observable.create( (observer) => {
      axios.post( environment.graphQlApi, data, {
        auth: {
          username: environment.login,
          password: environment.password
        }
      } )
      .then( ( response ) => {
        observer.next( response.data )
        observer.complete()
      } )
      .catch( ( error ) => {
        observer.error( error )
      } )
    } )
    return observable$
  }

  public getTranslation(text: string, target: string, provider: string) {
    const correctedText = text.replace(/(\r\n|\n|\r)/gm, "")
    const data = {
      query: `
      {
        translate(text:"${correctedText}",target:"${target}", provider:${provider}) {
          text,
          provider
        }
      }`
    }
    let observable$ = Observable.create( (observer) => {
      axios.post( environment.graphQlApi, data, {
        auth: {
          username: environment.login,
          password: environment.password
        }
      } )
      .then( ( response ) => {
        observer.next( response.data )
        observer.complete()
      } )
      .catch( ( error ) => {
        observer.error( error )
      } )
    } )
    return observable$
  }

  public getLanguages() {
    let observable$ = Observable.create( (observer) => {
      axios.get( environment.supportedLanguagesApi, {
        auth: {
          username: environment.login,
          password: environment.password
        }
      } )
      .then( (response) => {
        observer.next( response.data )
        observer.complete()
      } )
      .catch( (error) => {
        observer.error( error )
      } )
    } )
    return observable$
  }
}
