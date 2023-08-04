# Cryptr with Angular

## 04 Add user authentication

### Login and logout

🛠 Open up `nav.component.ts` file in `src/app/components/nav/` and paste the following code:

``` javascript
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@cryptr/cryptr-angular';
 
@Component({
 selector: 'app-nav',
 templateUrl: './nav.component.html',
 styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
 authenticated=false;
 unauthenticatedPath = '/';
 
 constructor(public auth: AuthService, private router: Router) {
 }
 
 ngOnInit(): void {
   this.auth.currentAuthenticationObservable().subscribe((isAuthenticated: boolean) => {
     this.authenticated = isAuthenticated;
   });
 }
 
 logOut(): void {
   this.auth.logOut(() => {
     this.router.navigateByUrl(this.unauthenticatedPath);
   });
 }
 
 signInWithRedirect(): void {
   this.auth.signInWithRedirect();
 }
}
```

🛠 Next, open up `nav.component.html` template file in `src/app/components/nav/` and modify buttons like this:

``` javascript
<button
  *ngIf="!authenticated"
  (click)="signInWithRedirect()"
  type="button"
  class="relative inline-flex items-center px-5 py-3 border border-transparent text-base uppercase leading-5 font-bold rounded-md text-yellow-500 shadow-md hover:shadow-xl focus:outline-none transition duration-150 ease-in-out"
>
  <span>Login</span>
</button>
<button
  *ngIf="authenticated"
  (click)="logOut()" 
  type="button"
  class="relative inline-flex items-center px-5 py-3 border border-transparent text-base uppercase leading-5 font-bold rounded-md text-yellow-500 shadow-md hover:shadow-xl focus:outline-none transition duration-150 ease-in-out"
>
  Logout
</button>
```

🛠 Run server & try to connect. Your Angular application redirects you to your sign form page, where you can sign in or sign up with an email.

---
**SANDBOX EMAIL**

You can log in with a sandbox email and we send you a magic link which should directly arrive in your personal inbox.

---

If you are logged out and try to go to the profile page, you will be taken to the login page, which is exactly what is expected!

### Retrieve User information

Everything in our authentication is gravitating around your end-user. At some point, you may want to retrieve and display user data such as email, metadata, or other attributes attached to his authentication.

If you want to retrieve user data such as email for example, you can do it through `AuthService`.

🛠 Update `ProfileComponent` in `src/app/pages/profile/profile.component.ts` with following code:

``` javascript
import { Component, OnInit } from '@angular/core';
import { AuthService } from '@cryptr/cryptr-angular';
 
@Component({
 selector: 'app-profile',
 templateUrl: './profile.component.html',
 styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
 authenticated = false;
 constructor(public auth: AuthService) {}
 
 ngOnInit() {
   this.auth.observableAuthenticated().subscribe((isAuthenticated: boolean) => {
     this.authenticated = isAuthenticated
   })
 }
 
 getUserEmail() : string | undefined {
   let user = this.auth.getUser();
   if (this.authenticated && user) {
     return user.email;
   }
 }
}
```

🛠 Update the template `ProfileComponent` in `src/app/pages/profile/profile.component.html` with following code:

``` javascript
<div class="py-36 bg-white">
 <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
   <div class="lg:text-center">
     <p class="text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
       This is a profile page
     </p>
     <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">   
       {{ getUserEmail() }}
     </p>
   </div>
 </div>
</div>
```

You can now see the user's email address in the profile page when you're logged in!

[Next](https://github.com/cryptr-examples/cryptr-angular-sample/tree/05-conclusion)
