import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth_user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  signOut() {}

  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public saveUserSession(user) {
    console.log('token', user)
    sessionStorage.setItem(`id`, user.id);
    sessionStorage.setItem(`name`, user.username);
    sessionStorage.setItem(`language`, user.language);
    sessionStorage.setItem(`password`, user.password);
    console.log('set sessionStorage : ', sessionStorage)
  }

  public getToken(): string {
    // console.log('TOKEN_KEY : ', sessionStorage.getItem(TOKEN_KEY))
    // return sessionStorage.getItem(TOKEN_KEY);

    console.log('get sessionStorage : ', sessionStorage.getItem(TOKEN_KEY))
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user) {
    // sessionStorage.setItem(`id`, user.id);
    // sessionStorage.setItem(`name`, user.username);
    // sessionStorage.setItem(`language`, user.language);
    // sessionStorage.setItem(`password`, user.password);
    // console.log('sessionStorage : ', sessionStorage)
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(user) {
    // return JSON.parse(sessionStorage.getItem(user));
    // return JSON.parse(sessionStorage.getItem(USER_KEY));
  }
}
