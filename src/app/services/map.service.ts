import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { MapFastDB } from '../_models';

@Injectable()
export class MapService {
    constructor(private http: Http) { console.log('Data service connected...')}
    private headers_var = new Headers({
      'Content-Type' : 'application/json',
      'Authorization': localStorage.getItem("beJWT")
    });


    getAll(): Observable<any> {
        console.log("get array");
        return this.http.get('/testmodel').map((response: Response) => response.json()).catch(err =>{
          return Observable.throw(err);
        });
    }

    getById(_id: string): Observable<MapFastDB> {
        return this.http.get('/testmodel/' + _id,{headers:this.headers_var}).map((response: Response) => response.json()).catch(err =>{
          return Observable.throw(err);
        });
    }
    putById(_id: string, user: MapFastDB): Observable<MapFastDB>{
      return this.http.put('/testmodel/' + _id, user,{headers:this.headers_var}).map((response: Response) => response.json() as MapFastDB).catch(err =>{
        return Observable.throw(err);
      });
    }

    createClient( mapdb: MapFastDB): Observable<MapFastDB>{
      console.log(mapdb);
      return this.http.post('/testmodel', mapdb,{headers:this.headers_var}).map((response: Response) => response.json() as MapFastDB).catch(err =>{
        return Observable.throw(err);
      });
    }
}
