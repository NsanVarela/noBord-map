import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserModel } from '../models/user.model';

import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: "root"
})
export class UserService {

  private DB_URL = environment.noBordBddUrl;
  private httpOptions: any = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type'
    })
  };

  constructor(private http: HttpClient) {}

  public register(user: UserModel) {
    return this.http.post(this.DB_URL + 'add/user', user, this.httpOptions);
  }
}
