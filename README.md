# Cryptr with Angular

## 03 Set up the Cryptr Angular SDK

### Installation

🛠 First, you need to install our package as dependency:

```bash
yarn add @cryptr/cryptr-angular
```

Before implementing our sign actions, you need to update your app module to import the SDK features.

🛠 Import `AuthModule` and `environment` in the `@NgModule` definition in `src/app/app.module.ts` as follows:

``` javascript

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { NavComponent } from './components/nav/nav.component';
// 1. Import AuthModule and environment
import { AuthModule } from '@cryptr/cryptr-angular'
import { environment } from 'src/environments/environment';
 
@NgModule({
 declarations: [AppComponent, HomeComponent, ProfileComponent, NavComponent],
 imports: [
   BrowserModule,
   AppRoutingModule,
   // 2. Add in @NgModule definition
   AuthModule.forRoot(environment.cryptrConfig)
 ],
 providers: [],
 bootstrap: [AppComponent],
})
export class AppModule {}

```

🛠 Import `HttpClientModule` and `HTTP_INTERCEPTOR` and add `{ provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true }` to providers:

``` javascript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { NavComponent } from './components/nav/nav.component';
import { AuthModule, AuthHttpInterceptor } from '@cryptr/cryptr-angular'
// 1. Import HttpClientModule and HTTP_INTERCEPTOR
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { environment } from 'src/environments/environment';
 
@NgModule({
 declarations: [AppComponent, HomeComponent, ProfileComponent, NavComponent],
 imports: [
   BrowserModule,
   AppRoutingModule,
   // 2. Add HttpClientModule in @NgModule definition
   HttpClientModule,
   AuthModule.forRoot(environment.cryptrConfig)
 ],
 providers: [
   // 3. Modify providers
   { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true }
 ],
 bootstrap: [AppComponent],
})
export class AppModule {}
```

At this point, your app should run and be prepared to handle end-user session with Cryptr.

### App routing update

🛠 Import `AuthGuard` and add `canActivate: [AuthGuard]` in `src/app/app-routing.module.ts` to every path you want to secure (if there is no active session, end-user will be redirected to sign form):

``` javascript
import { ProfileComponent } from './pages/profile/profile.component';
// 1. Import AuthGuard
import { AuthGuard } from '@cryptr/cryptr-angular';
 
const routes: Routes = [
 {
   path: '',
   component: HomeComponent,
 },
 {
   path: 'profile',
   component: ProfileComponent,
   // 2. Add canActivate: [AuthGuard] to secure profile path
   canActivate: [AuthGuard]
 }
];
 
@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule { }
```

This update will allow your app to handle the end of the authentication process from Cryptr.

You are ready to implement the authentication flow.
