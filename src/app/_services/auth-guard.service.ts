import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(
    private router: Router,
    private auth: AuthenticationService
  ) { }

  canActivate(next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      // if (this.jwt.getUser()) {
      //   if (this.jwt.isTokenExpired()) {
      //     // Shoud redirect Sign in page
      //   } else {
      //     return true
      //   }
      // } else {
      //   return new Promise((resolve) => {
      //     this.auth.isLoggedIn().then((e) => {
      //       resolve(true)
      //       // Shoud redirect Sign in page
      //     })
      //   })
      // }
    // if(!this.auth.isLoggedIn()) {
    //   this.router.navigateByUrl(`/`)
    //   return false
    // }
    return true
  }
}
