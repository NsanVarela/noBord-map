import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import * as jwt_decode from 'jwt-decode';

export interface UserDetails {
  id: number
  username: string
  age?: number
  email: string
  password: string
  phone?: number
  language?: string
  profession?: string
  type: string
  experience?: number
  country?: string
  description?: string
  skills?: string
  iat: number
  exp: number
}

interface TokenResponse {
  token: string
}

export interface TokenPayload {
  id: number
  username: string
  email: string
  password: string
  language: string
  type: string
}

@Injectable()
export class AuthenticationService {
  private token: string
  private DB_URL = environment.noBordBddUrl
  private loggedInStatus = JSON.parse(localStorage.getItem('loggedIn') || 'false')

  constructor(private http: HttpClient, private router: Router) {}

  setLoggedIn(value: boolean) {
    this.loggedInStatus = value
    localStorage.setItem('loggedIn', 'true')
  }

  private saveToken(token: string): void {
    localStorage.setItem(`userToken`, token)
    this.token = token
  }

  public getToken(): string {
    if(!this.token) {
      this.token = localStorage.getItem(`userToken`)
    }
    return this.token
  }

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE'
    })
  }

  public getUserDetails() {
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
    return JSON.parse(localStorage.getItem('loggedIn') || this.loggedInStatus.toString())
  }

  public register(user: TokenPayload): Observable<any> {
    console.log('user : ', user)
    const base = this.http.post(this.DB_URL + `api/users`, user, this.httpOptions)

    const request = base.pipe(
      map((data: TokenResponse) => {
        if(data.token) {
          this.saveToken(data.token)
        }
        console.log('data', data)
        return data
      })
    )
    return request
  }

  public login(user): Observable<any> {
    const base = this.http.post(this.DB_URL + `api/users/login`, user, this.httpOptions)

    const request = base.pipe(
      map((data: TokenResponse) => {
        if(data.token) {
          console.log('data token : ', data.token)
          this.saveToken(data.token)
        }
        return data
      })
    )

    return request
  }

  public edit(user): Observable<any> {
    const base = this.http.patch(this.DB_URL + `api/users`, user, this.httpOptions)

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

  public profile(user): Observable<any> {
    console.log('user profile : ', user)
    const id = user.result.id;
    const base = this.http.get(this.DB_URL + `api/users/${id}`)

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

  public logout(): void {
    this.token = ``
    window.localStorage.removeItem(`userToken`)
    this.router.navigateByUrl(`/`)
  }
}

