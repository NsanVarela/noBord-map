import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment'
import { UserModel } from '../model/user.model';

const AUTH_API = environment.noBordBddUrl;
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json',
  'Access-Control-Allow-Headers': 'Content-Type' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  // signin() {
  //   this.http.get(AUTH_API + 'token/sign')
  //   .subscribe(
  //     (res) => {
  //       console.log(res);
  //       if (res['token']) {
  //         localStorage.setItem('token', res['token']);
  //       }
  //     },
  //     (err) => {
  //       console.log(err)
  //     }
  //   );
  // }

  // getPath() {
  //   this.http.get(AUTH_API + 'path1')
  //   .subscribe(
  //     (res) => {
  //       console.log(res);
  //     },
  //     (err) => {
  //       console.log(err)
  //     }
  //   );
  // }

  login(user): Observable<any> {
    // this.signin();
    return this.http.post(AUTH_API + 'find/user', user, httpOptions);

  }

  register(user: UserModel) {
    // console.log('user register : ', user)
    return this.http.post(AUTH_API + 'add/user', user, httpOptions)
  }
}
