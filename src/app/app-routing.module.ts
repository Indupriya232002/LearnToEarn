import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogoComponent } from './components/logo/logo.component';
import { SkillsComponent } from './components/skills/skills.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { ContactComponent } from './components/contact/contact.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { UserdashboardComponent } from './components/userdashboard/userdashboard.component';

const routes: Routes = [
  {path:'', redirectTo: 'logo', pathMatch: 'full'},
  {path:'logo', component:LogoComponent},
  {path:'skills', component:SkillsComponent},
  {path:'aboutus', component:AboutusComponent},
  {path:'resources', component:ResourcesComponent},
  {path:'contact', component:ContactComponent},
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'userdashboard', component:UserdashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
