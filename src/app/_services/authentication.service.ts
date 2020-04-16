import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

export interface UserDetails {
  id: number
  first_name: string
  last_name: string
  email: string
  password: string
  language: string
  type: string
  exp: number
  iat: number
}

interface TokenResponse {
  token: string
}

export interface TokenPayload {
  id: number
  first_name: string
  last_name: string
  email: string
  password: string
  language: string
  type: string
}

@Injectable()
export class AuthenticationService {
  private token: string
  private DB_URL = environment.noBordBddUrl

  constructor(private http: HttpClient, private router: Router) {}

  private saveToken(token: string): void {
    localStorage.setItem(`userToken`, token)
    this.token = token
  }

  private getToken(): string {
    if(!this.token) {
      this.token = localStorage.getItem(`userToken`)
    }
    return this.token
  }

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type' })
  }

  public getUserDetails(): UserDetails {
    const token = this.getToken()
    let payload
    if(token) {
      payload = token.split('.')[1]
      payload = window.atob(payload)
      return JSON.parse(payload)
    } else {
      return null
    }
  }

  public isLoggedIn(): boolean {
    const user = this.getUserDetails()
    if(user) {
      return user.exp > Date.now() / 1000
    } else {
      return false
    }
  }

  public register(user: TokenPayload): Observable<any> {
    const base = this.http.post(this.DB_URL + `users/register`, user, this.httpOptions)

    const request = base.pipe(
      map((data: TokenResponse) => {
        if(data.token) {
          this.saveToken(data.token)
        }
        return data
      })
    )
    return request
  }

  public login(user: TokenPayload): Observable<any> {
    const base = this.http.post(this.DB_URL + `users/login`, user, this.httpOptions)

    const request = base.pipe(
      map((data: TokenResponse) => {
        if(data.token) {
          this.saveToken(data.token)
        }
        return data
      })
    )

    return request
  }

  public profile(): Observable<any> {
    return this.http.get(this.DB_URL + `users/profile`, {
      headers: { Authorization: `${this.getToken()}` }
    })
  }

  public logout(): void {
    this.token = ``
    window.localStorage.removeItem(`userToken`)
    this.router.navigateByUrl(`/`)
  }
}

// VIDEO : 31 min 55 sec
