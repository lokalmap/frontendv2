import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { UserService } from './user.service';
import { Loginuserobj } from '../_models';
import { Router} from '@angular/router';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    constructor(
      private http: Http,
      private router: Router,
      private userService: UserService) { }

    login(username1: string, password1: string) {
      const data: Loginuserobj = {
        username: username1,
        password: password1
      }
      const req =  this.http.post('/UsersDetails/login',data )
      .subscribe(
        res => {
          console.log("res status : " + res.status);
          if (res.status = 200)
          {
            localStorage.setItem('currentUID', res.json().userId);
            localStorage.setItem('beJWT', res.json().id);
            localStorage.setItem('isLoggedin', 'true');
            this.router.navigate(['/ct']);
          }
        }, err => {
          console.log("error occured");
        }
      )

    }
    logout() {
        // remove user from local storage to log user out
//        localStorage.removeItem('currentUser');
        localStorage.removeItem('isLoggedin');
        localStorage.removeItem('currentUID');
        localStorage.removeItem('beJWT');
    }
}
