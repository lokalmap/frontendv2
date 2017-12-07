import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { User } from '../_models/index';

@Injectable()
export class UserService {
    constructor(private http: Http) {     console.log('Data service connected...')}


    getAll() {
        return this.http.get('/UsersDetails').map((response: Response) => response.json());
    }

    getById(_id: string) {
        return this.http.get('/UsersDetails/' + _id).map((response: Response) => response.json());
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
}
