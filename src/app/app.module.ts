import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from '@angular/forms'

import { AppComponent } from "./app.component";
import { MapComponent } from "./map/map.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HomeComponent } from "./home/home.component";
import { MaterialModule } from "./material/material.module";

const appRoutes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "map", component: MapComponent }
];

@NgModule({
  declarations: [AppComponent, MapComponent, HomeComponent],
  imports: [
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
