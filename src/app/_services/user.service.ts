import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../_models/user';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class UserService {
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type' })
  };
  
  constructor(private http: HttpClient) {}

  register(user: User) {
    return this.http.post(environment.noBordBddUrl + 'add/user', user, this.httpOptions);
  }

}
