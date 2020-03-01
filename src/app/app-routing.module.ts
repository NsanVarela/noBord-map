import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';

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
  // {
  //   path: `auth`,
  //   component: AuthComponent
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
