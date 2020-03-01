import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth/auth.component';

export const appRouteList: Routes = [
  {
    path: ``,
    component: HomeComponent
  },
  {
    path: `home`,
    component: HomeComponent
  },
  {
    path: `map`,
    component: MapComponent
  },
  {
    path: `auth`,
    component: AuthComponent
  },
  // {
  //   path: `register`,
  //   component: RegisterComponent
  // },
  // {
  //   path: `login`,
  //   component: LoginComponent
  // }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(appRouteList)
  ]
})
export class AppRoutingModule {}
