import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthentificationService } from '../_services/authentification.service';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
constructor(
private router: Router,
private authentificationService: AuthentificationService
) {}

canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
const currentUser = this.authentificationService.currentUserValue;
if (currentUser) {
// authorised so return true
return true;
}

// not logged in so redirect to login page
this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
return false;
}
}
