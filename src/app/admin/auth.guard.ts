import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../modelss/auth.service';

@Injectable()

export class AuthGuard implements CanActivate {

    constructor(private router: Router, private authservice: AuthService) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (!this.authservice.authenticated) {
            this.router.navigateByUrl('admin/auth');
            return false;
        }
        return true;
    }
}