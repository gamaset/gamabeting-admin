import { Injectable } from '@angular/core';
import {
    Router,
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';
import decode from 'jwt-decode';
import { TokenStorageService } from './TokenStorageService';
import { Observable } from 'rxjs';
@Injectable()
export class RoleGuardService implements CanActivate {
    constructor(public tokenStorage: TokenStorageService, public router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        // this will be passed from the route config
        // on the data property
        const expectedRole = route.data.role;
        const userDecoded = this.tokenStorage.getDecoded();
        // decode the token to get its payload

        if (userDecoded.roles) {
            if(userDecoded.roles.includes(expectedRole)){
                return true;
            }
        }
        
        // navigate to not found page
        this.router.navigate(['/404']);
        return false;
    }

    isExpectedRole(role) {
        if (this.tokenStorage.getDecoded().roles) {
            return this.tokenStorage.getDecoded().roles.includes(role);
        } else { 
            return false 
        }
    }
}