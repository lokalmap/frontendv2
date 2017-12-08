import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
//import { UserService } from '../services/index';
import { Loginuserobj } from '../_models';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    constructor(private http: Http) { }

    login(username1: string, password1: string) {
      const data: Loginuserobj = {
        username: username1,
        password: password1
      }

      return this.http.post('/UsersDetails/login', data)
          .map((response: Response) => {
              // login successful if there's a jwt token in the response
                console.log("KKKKKKKKK " + password1 + " " + username1);
              let user = response.json();
              

              return user;
          });


      /*
        return this.http.post('/UsersDetails/login', JSON.stringify({ username: username1, password: password1 }))
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                  console.log("KKKKKKKKK " + password1 + " " + username1);
                let user = response.json();
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    //localStorage.setItem('currentUser', JSON.stringify(user));
                    console.log("KKKKKKKKK " + true);
                    localStorage.setItem('isLoggedin', 'true');
                }

                return user;
            });
            */
    }

    logout() {
        // remove user from local storage to log user out
//        localStorage.removeItem('currentUser');
        localStorage.removeItem('isLoggedin');
    }
}
