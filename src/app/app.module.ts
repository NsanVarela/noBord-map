import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MaterialModule } from "./_material/material.module";
import { AppRoutingModule } from './app-routing.module';

import { UserService } from './_services/user.service'

import { AppComponent } from "./app.component";
import { MapComponent } from "./components/map/map.component";
import { HomeComponent } from "./components/home/home.component";
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AuthComponent } from './components/auth/auth.component';
import { ChatViewComponent } from './components/chat-view/chat-view.component';
import { MessageSenderComponent } from './components/message-sender/message-sender.component';
import { ChangeTargetComponent } from './components/change-target/change-target.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    AuthComponent,
    ChatViewComponent,
    MessageSenderComponent,
    ChangeTargetComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
