import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/widgets/header/header.component';
import { FooterComponent } from './components/widgets/footer/footer.component';
import { RegisterComponent } from './components/register/register.component';

import { AuthService } from './services/auth/auth.service';
import { UsersService } from './services/users/users.service';
import { PartnersService } from './services/partners/partners.service';
import { CategoriesService } from './services/categories/categories.service';

import { LandingComponent } from './components/landing/landing.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { MenuComponent } from './components/admin/widgets/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { RequestsComponent } from './components/requests/requests.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AgmCoreModule } from '@agm/core';
import { SettingsComponent } from './components/settings/settings.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LandingComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'requests', component: RequestsComponent },
  { path: 'profile/:id', component: ProfileComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    LandingComponent,
    DashboardComponent,
    MenuComponent,
    HomeComponent,
    RequestsComponent,
    ProfileComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes, { useHash: true }),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCi5s8s6hthogs8ch_fdtPLbOUFmZHGPso',
      libraries: ['places'],
    }),
  ],
  providers: [
    AuthService,
    UsersService,
    PartnersService,
    CategoriesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
