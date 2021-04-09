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