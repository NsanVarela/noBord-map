import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  private DB_URL = environment.noBordBddUrl;
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type' })
  };

  public login(user): Observable<any> {
    return this.http.post(this.DB_URL + 'find/user', user, this.httpOptions);
  }

  public register(user: UserModel) {
    return this.http.post(this.DB_URL + 'add/user', user, this.httpOptions);
  }

}
