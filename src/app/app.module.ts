import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { NavComponent } from './components/nav/nav.component';
import { AuthHttpInterceptor, AuthModule } from '@cryptr/cryptr-angular';
import { environment } from 'src/environments/environment';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

@NgModule({
  declarations: [AppComponent, HomeComponent, ProfileComponent, NavComponent],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    HttpClientModule,
    AuthModule.forRoot(environment.cryptrConfig)
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
