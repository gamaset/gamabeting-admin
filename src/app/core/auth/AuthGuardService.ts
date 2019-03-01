import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { TokenStorageService } from './TokenStorageService';
import { log } from 'util';


@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(private tokenStorageService: TokenStorageService, private router: Router) { }

    canActivate(): boolean {
        console.log("AuthGuard: " + this.tokenStorageService.isAuthenticated());
        
        if (!this.tokenStorageService.isAuthenticated()) {
            this.router.navigate(['login']);
            return false;
        }
        return true;
    }
}