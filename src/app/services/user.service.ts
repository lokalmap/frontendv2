import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { User, Loginuserobj } from '../_models';

@Injectable()
export class UserService {
    constructor(private http: Http) {     console.log('Data service connected...')}


    getAll() {
        return this.http.get('/UsersDetails').map((response: Response) => response.json());
    }

    getById(currentUID: string, beJWT: string) {
        return this.http.get('/UsersDetails/'+currentUID+'?access_token='+beJWT)
        .map(
          (response: Response) =>
          {
            return  response.json().accountType;
          }
        );
    }

    create(user: User) {
        return this.http.post('/UsersDetails', user);
    }

    update(user: User) {
        return this.http.put('/UsersDetails/' + user._id, user);
    }

    delete(_id: string) {
        return this.http.delete('/UsersDetails/' + _id);
    }

    userloginreq(loginuserobj: Loginuserobj) {
        return this.http.post('/UsersDetails/login', loginuserobj);
    }

}
