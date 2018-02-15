import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
//import { appConfig } from '../app.config';
import { UserInfo, Loginuserobj } from '../_models';

@Injectable()
export class UserService {
    constructor(private http: Http) {     console.log('Data service connected...')}
    private headers_var = new Headers({
      'Content-Type' : 'application/json',
      'Authorization': localStorage.getItem("beJWT")
    });


    getAll() {
        return this.http.get('/Users').map((response: Response) => response.json());
    }

    getById(_id: string): Observable<UserInfo> {
        return this.http.get('/ClientAccs/' + _id,{headers:this.headers_var}).map((response: Response) => response.json()).catch(err =>{
          return Observable.throw(err);
        });
    }
    putById(_id: string, user: UserInfo): Observable<UserInfo>{
        console.log("tetsg " + _id);
        console.log(user);
        /*
        return this.http.put('/Employees/' + _id, user).map((response: Response) => response.json() as UserInfo).catch(err =>{
          return Observable.throw(err);
        });
        */
      return this.http.put('/ClientAccs/' + _id, user,{headers:this.headers_var}).map((response: Response) => response.json() as UserInfo).catch(err =>{
        return Observable.throw(err);
      });
    }

    createClient( user: UserInfo): Observable<UserInfo>{
      console.log(user);
      return this.http.post('/ClientAccs', user,{headers:this.headers_var}).map((response: Response) => response.json() as UserInfo).catch(err =>{
        return Observable.throw(err);
      });
    }

    /*
    createClient(user: UserInfo) {
        return this.http.post('/ClientAccs', user);
    }
    */
    checkClientAccExists(_id: string):Observable<any>{
        console.log("trace : " + _id);
        return this.http.get('/ClientAccs/' + _id + '/exists',{headers:this.headers_var}).map((response: Response) => response.json() as any).catch(err =>{
          return Observable.throw(err);
        });
    }
    getUserUsername(_id: string) {
        return this.http.get('/UsersDetails/' +_id,{headers:this.headers_var}).map((response: Response) => response.json() as JSON).catch(err =>{
          return Observable.throw(err);
        });
    }
    create(user: UserInfo) {
        return this.http.post('/UsersDetails', user);
    }

    update(user: UserInfo) {
        return this.http.put('/Users/' + user._id, user);
    }

    delete(_id: string) {
        return this.http.delete('/Users/' + _id);
    }

    userloginreq(loginuserobj: Loginuserobj) {
        return this.http.post('/UsersDetails/login', loginuserobj);
    }

}
