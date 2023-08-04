import { Component, OnInit } from '@angular/core';
import { AuthService } from '@cryptr/cryptr-angular';

@Component({
 selector: 'app-home',
 templateUrl: './home.component.html',
 styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 authenticated = false;
 constructor(public auth: AuthService) { }

 ngOnInit(): void {
   this.auth.currentAuthenticationObservable().subscribe((isAuthenticated: boolean) => {
     this.authenticated = isAuthenticated;
   });
 }

 /** @deprecated */
 signUpWithRedirect(): void {
   this.auth.signUpWithRedirect();
 }
}
