import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService, AuthenticationService, UserService } from '../services/index';

import { routerTransition } from '../router.animations';

@Component({
    moduleId: module.id,
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;

    constructor(
      private route: ActivatedRoute,
      private router: Router,
      private authenticationService: AuthenticationService,
      private alertService: AlertService,
      private userService: UserService,) { }

      ngOnInit() {
          // reset login status
          this.authenticationService.logout();

          // get return url from route parameters or default to '/'
          this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/customers/home';
      }
      login() {
          this.loading = true;
          console.log("this.model.password " + this.model.password);
          this.userService.userloginreq(this.model)
              .subscribe(
                  data => {
                    localStorage.setItem('isLoggedin', 'true');
                      this.alertService.success('Login successful', true);
                      console.log('alert : : ' + data);
                      this.router.navigate(['/customers']);
                  },
                  error => {
                      this.alertService.error(error);
                      this.loading = false;
                  });
          /*
          this.authenticationService.login(this.model.username, this.model.password)
              .subscribe(
                  data => {
                      this.router.navigate([thi s.returnUrl]);
                  },
                  error => {
                      this.alertService.error(error);
                      this.loading = false;
                  });
                  */
      }

}
