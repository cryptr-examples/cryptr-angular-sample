import { Component, OnInit } from '@angular/core';
import { AuthService } from '@cryptr/cryptr-angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  authenticated = false;

  constructor(public auth: AuthService) { }

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
