import { Component} from '@angular/core';
import { routerTransition } from '../router.animations';
import { Router } from '@angular/router';

import { AlertService, UserService } from '../services/index';



@Component({
    moduleId: module.id,
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent {
  model: any = {};
  loading = false;

    constructor(
      private router: Router,
      private userService: UserService,
      private alertService: AlertService) { }

      register() {
    this.loading = true;
    this.userService.create(this.model)
        .subscribe(
            data => {
                this.alertService.success('Registration successful', true);
                console.log('alert');
                this.router.navigate(['/login']);
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });
}

}
