import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MaterialModule } from "./material/material.module";
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from "./app.component";
import { MapComponent } from "./map/map.component";
import { HomeComponent } from "./home/home.component";
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [AppComponent, MapComponent, HomeComponent, RegisterComponent, LoginComponent, AuthComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
