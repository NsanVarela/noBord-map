import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MapComponent } from './components/map/map.component';
import { AuthComponent } from './components/auth/auth.component';
import { ChatViewComponent } from './components/chat-view/chat-view.component';

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
    component: ChatViewComponent
  }

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
