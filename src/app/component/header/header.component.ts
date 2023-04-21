import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isLoggedIn: boolean = false; constructor(public auth: AuthService, private router: Router) {
   
  }

  
  ngOnInit() {
    // subscribe to the isLoggedIn observable in the authService
    this.auth.isLoggedIn.subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
    });
  }

  onLogout() {
    // call the logout method in the authService
    this.auth.logout();
  }
  
 

 
  
}
