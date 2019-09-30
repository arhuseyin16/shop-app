import { Component } from '@angular/core';
import { AuthService } from '../modelss/auth.service';
import { Router } from '@angular/router';


@Component({
        templateUrl: 'admin.component.html'
})

export class AdminComponent {

        constructor(private authService: AuthService, private router: Router) {}

        logout() {
             this.authService.clear();
             this.router.navigateByUrl('/shop');
        }
}