import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {CharaPageComponent} from './chara-page/chara-page.component';
import { DesignPageComponent} from './design-page/design-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PersonajeComponent } from './personaje/personaje.component';
import { ProfileComponent } from './profile/profile.component';
import { DesInfComponent } from './des-inf/des-inf.component';
import { CharaCardComponent } from './chara-card/chara-card.component';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HomePageComponent},
  {path: 'characters', component: CharaPageComponent},
  {path: 'designs', component: DesignPageComponent},
  {path: 'characters/chara/:name/designs', component: DesignPageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'personaje', component: PersonajeComponent},
  {path: 'profile/:username', component: ProfileComponent},
  {path: 'profile/:username/design/:name', component: DesInfComponent},
  {path: 'designs/:name', component: DesInfComponent},
  {path: 'characters/chara/:name/designs/:name', component: DesInfComponent},
  {path: 'characters/chara/:name', component: CharaCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
