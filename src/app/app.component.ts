import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TokenStorageService } from './core/auth/TokenStorageService';

@Component({
  // tslint:disable-next-line
  selector: 'body',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {
  constructor(private tokenStorage: TokenStorageService, private router: Router) { }
  private roles: string[];
  private authority: string;
 
 
  ngOnInit() {
    this.buildRoles();
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }

  buildRoles = () => {
    if (this.tokenStorage.getToken()) {
      this.roles = this.tokenStorage.getAuthorities();
      this.roles.every(role => {
        if (role === 'ROLE_ADMIN') {
          this.authority = 'ADMIN';
          return false;
        } else if (role === 'ROLE_MANAGER') {
          this.authority = 'MANAGER';
          return false;
        } else if (role === 'ROLE_AGENT') {
          this.authority = 'AGENT';
          return false;
        }
        this.authority = 'unauthorized';
        return true;
      });
    }
  }
}
