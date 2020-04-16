import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MapComponent } from './components/map/map.component';
import { AuthComponent } from './components/auth/auth.component';
import { ChatViewComponent } from './components/chat-view/chat-view.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuardService } from './_services/auth-guard.service';

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
  {
    path: `chat`,
    component: ChatViewComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: `profile`,
    component: ProfileComponent,
    canActivate: [AuthGuardService]
  }
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
