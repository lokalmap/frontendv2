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
      private usersrv: UserService) { }

    login(username1: string, password1: string) {
      const data: Loginuserobj = {
        username: username1,
        password: password1
      }
      console.log("login invoke : ");
      const req =  this.http.post('/UsersDetails/login',data )
      .subscribe(
        res => {
          console.log("res status : " + res.status);
          if (res.status = 200)
          {
            let cUID:string = res.json().userId;
            localStorage.setItem('currentUID', cUID);   //for monitoring purposes only
            localStorage.setItem('beJWT', res.json().id);
            localStorage.setItem('isLoggedin', 'true');
            sessionStorage.setItem('currentUID',cUID);
            console.log("get cUID:  " +cUID);
            this.usersrv.checkClientAccExists(cUID).subscribe(response => {
                  if (response.exists) {
                      this.router.navigate(['/providers']);
                  }else
                  {
                    this.router.navigate(['/providers/info/'+ cUID]);
                  }
              }, err => {
                console.log("authentication.service.ts errors + : " + err)
              });
          }
        }, err => {
          console.log("error occured");
          return '';
        }
      )
      return '';
    }
    logout() {
        // remove user from local storage to log user out
//        localStorage.removeItem('currentUser');
        localStorage.removeItem('isLoggedin');
        localStorage.removeItem('currentUID');
        localStorage.removeItem('beJWT');
    }
}
