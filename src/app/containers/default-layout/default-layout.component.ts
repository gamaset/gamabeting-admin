import { Component, Input } from '@angular/core';
import { navItems, navItemsAdmin } from './../../_nav';
import { TokenStorageService } from '../../core/auth/TokenStorageService';
import { Router } from '@angular/router';
import { RoleGuardService } from '../../core/auth/RoleGuardService';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  username: string;
  public navItems = [];
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement = document.body;

  constructor(private tokenStorage: TokenStorageService, private roleGuard: RoleGuardService, private router: Router) {
    this.username = tokenStorage.getUsername();
    if(this.roleGuard.isExpectedRole('ROLE_MANAGER')){
      this.navItems = navItemsAdmin;
    }else{
      this.navItems = navItems;
    }

    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = document.body.classList.contains('sidebar-minimized');
    });

    this.changes.observe(<Element>this.element, {
      attributes: true
    });
  }


  logout(){
    this.tokenStorage.signOut();
    this.router.navigate(['login']);
  }
}
