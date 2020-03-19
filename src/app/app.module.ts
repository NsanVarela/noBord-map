import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { authInterceptorProviders } from "./helpers/auth.interceptor"

import { MaterialModule } from "./material/material.module";
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from "./app.component";
import { MapComponent } from "./components/map/map.component";
import { HomeComponent } from "./components/home/home.component";
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AuthComponent } from './components/auth/auth.component';
import { ChatViewComponent } from './components/chat-view/chat-view.component';

@NgModule({
  declarations: [AppComponent, MapComponent, HomeComponent, RegisterComponent, LoginComponent, AuthComponent, ChatViewComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {}
