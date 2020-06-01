import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CharaPageComponent } from './chara-page/chara-page.component';
import { DesignPageComponent } from './design-page/design-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { PersonajeComponent } from './personaje/personaje.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { DesInfComponent } from './des-inf/des-inf.component';
import { CharaCardComponent } from './chara-card/chara-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CharaPageComponent,
    DesignPageComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    PersonajeComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    DesInfComponent,
    CharaCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
