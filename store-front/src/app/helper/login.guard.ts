import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { LoginService } from '../service/login.service';

@Injectable({ providedIn: 'root' })
export class LoginGuard implements CanActivate {
    constructor(private router: Router, 
        private loginService: LoginService) {}
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = this.loginService.currentUser;
        if (currentUser) {
            if (route.data.roles && route.data.roles.indexOf(currentUser) === -1) {
                this.router.navigate(['']);
                return false;
            }
            return true;
        }
    }
}