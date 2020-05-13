import { Injectable } from '@angular/core';
import { UserSession } from '../_models/user-session';
import { VOCABULARY } from 'src/assets/data/vocabulary';

@Injectable()
export class WorkflowService {

  private userToken: UserSession
  private userLanguage: string
  private token: string
  private language: string


  constructor() {}

  getUser() {
    return this.userToken
  }

  getUserType() {
    return this.userToken && this.userToken.userTypeSession == 'DE' ? 'Candidat' : 'Conseiller';
  }

  getUserLanguage() {
    this.language = VOCABULARY.find((v) => v.isoCode === this.userToken.userLanguageSession).languageNameNative;
    return this.language;
  }

  getUserIsoCode() {
    return this.userToken.userLanguageSession;
  }

  setUser(user: UserSession) {
    this.userToken = user
  }

  setUserType(user: UserSession) {
    this.userToken = user
  }

  setUserLanguage(value: string) {
    this.userLanguage = value
  }

}



// this.userSession = {
//   userIdSession: this.userSession.userIdSession,
//   userTypeSession: this.userType,
//   userLanguageSession: this.target
// };
// sessionStorage.setItem(`userSession`, JSON.stringify(this.userSession))
