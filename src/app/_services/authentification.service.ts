import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../_models/user';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthentificationService {
    private currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    private currentUser: Observable<User>;
    private httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type' })
    };

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string) {
      return this.http.post(environment.noBordBddUrl + 'find/user', { username, password }, this.httpOptions)
      .pipe(map((user: User) => {
        if(user) {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
        }
        return user;
      }));
    }

    logout() {
      localStorage.removeItem('currentUser');
      this.currentUserSubject.next(null);
    }
}
