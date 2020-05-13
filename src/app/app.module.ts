import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MaterialModule } from "./_material/material.module";
import { AppRoutingModule } from "./app-routing.module";

import { AuthenticationService } from "./_services/authentication.service";
import { AuthGuardService } from "./_services/auth-guard.service";
import { WorkflowService } from './_services/workflow.service';
import { SharedService } from './shared/common/shared-service';

import { AppComponent } from "./app.component";
import { MapComponent } from "./components/map/map.component";
import { LoginComponent } from "./components/auth/login/login.component";
import { HomeComponent } from "./components/home/home.component";
import { AuthComponent } from "./components/auth/auth.component";
import { NavbarComponent } from "./shared/components/navbar/navbar.component";
import { LogoutComponent } from "./shared/components/logout/logout.component";
import { LanguageComponent } from './shared/components/language/language.component';
import { ProfileComponent } from "./components/profile/profile.component";
import { RegisterComponent } from "./components/auth/register/register.component";
import { ChatViewComponent } from "./components/chat-view/chat-view.component";
import { ChangeTargetComponent } from "./components/change-target/change-target.component";
import { MessageSenderComponent } from "./components/message-sender/message-sender.component";


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
    ChangeTargetComponent,
    ProfileComponent,
    NavbarComponent,
    LogoutComponent,
    LanguageComponent
  ],
  entryComponents: [
    LogoutComponent,
    LanguageComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [AuthenticationService, AuthGuardService, SharedService, WorkflowService],
  bootstrap: [AppComponent]
})
export class AppModule {}
