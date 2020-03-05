import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from '../model/user.model';
import * as env from '../../environments/environment'

@Injectable({
  providedIn: "root"
})
export class UserService {

  private httpOptions: any = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type'
    })
  };



  constructor(private http: HttpClient) {}

  register(user: UserModel) {
    console.log('user', user)
    return this.http.post(env.environment.noBordBddUrl + 'add/user', user);
  }
}
