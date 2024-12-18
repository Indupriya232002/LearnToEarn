import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoComponent } from './components/logo/logo.component';
import { SkillsComponent } from './components/skills/skills.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { ContactComponent } from './components/contact/contact.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { UserdashboardComponent } from './components/userdashboard/userdashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    SkillsComponent,
    AboutusComponent,
    ResourcesComponent,
    ContactComponent,
    RegisterComponent,
    LoginComponent,
    UserdashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
