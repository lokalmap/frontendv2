import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ProductDB, CBookings } from '../_models';
@Injectable()
export class CommonService {
    constructor(private http: Http) { console.log('Data service connected...')}
    private headers_var = new Headers({
      'Content-Type' : 'application/json',
      'Authorization': localStorage.getItem("beJWT")
    });

    getAll(): Observable<any> {
        console.log("safassg");
        return this.http.get('/testmodel').map((response: Response) => response.json()).catch(err =>{
          return Observable.throw(err);
        });
    }

    getById(_id: string): Observable<ProductDB> {
        return this.http.get('/testmodel/' + _id,{headers:this.headers_var}).map((response: Response) => response.json()).catch(err =>{
          return Observable.throw(err);
        });
    }
    putById(_id: string, user: ProductDB): Observable<ProductDB>{
      return this.http.put('/testmodel/' + _id, user,{headers:this.headers_var}).map((response: Response) => response.json() as ProductDB).catch(err =>{
        return Observable.throw(err);
      });
    }
    postchatdb(memGrp:any,name:string): Observable<any>{
    //  console.log("pvar : ",dbvar);
    let data = {
      cdate:Date(),
      ldate:Date(),
      name:name
    }
      return this.http.post('/ClientAccs',{headers:this.headers_var}).map((response: Response) => response.json() as any).catch(err =>{
        return Observable.throw(err);
      });
    }

    postClientAccbyIDCustom(clientidvar:string,dburlvar:string,dbvar:ProductDB): Observable<any>{
      console.log("pvar : ",dbvar);
      return this.http.post('/ClientAccs'+ '/' + clientidvar + '/' + dburlvar, dbvar,{headers:this.headers_var}).map((response: Response) => response.json() as any).catch(err =>{
        return Observable.throw(err);
      });
    }
    deleteCBookingByUID(_id: string): Observable<CBookings> {
        return this.http.delete('/CBookings/' + _id,{headers:this.headers_var}).map((res: Response) => res.json()).catch(err =>{
          return Observable.throw(err);
        });
    }
    postCBooking(dbvar:CBookings): Observable<any>{
      console.log("dbvar : ",dbvar);
      return this.http.post('/CBookings', dbvar,{headers:this.headers_var}).map((res: Response) => res.json() as any).catch(err =>{
        return Observable.throw(err);
      });
    }
    getCBookingByUID(_id: string): Observable<CBookings> {
        return this.http.get('/ClientAccs/' + _id + '/cBookings' ,{headers:this.headers_var}).map((response: Response) => response.json()).catch(err =>{
          return Observable.throw(err);
        });
    }


    deletePBookingByUID(_id: string): Observable<CBookings> {
        return this.http.delete('/PBookings/' + _id,{headers:this.headers_var}).map((res: Response) => res.json()).catch(err =>{
          return Observable.throw(err);
        });
    }
    postPBooking(dbvar:CBookings): Observable<any>{
      console.log("dbvar : ",dbvar);
      return this.http.post('/PBookings', dbvar,{headers:this.headers_var}).map((res: Response) => res.json() as any).catch(err =>{
        return Observable.throw(err);
      });
    }
    getPBookingByUID(_id: string): Observable<CBookings> {
        return this.http.get('/UsersDetails/' + _id + '/pBookings' ,{headers:this.headers_var}).map((response: Response) => response.json()).catch(err =>{
          return Observable.throw(err);
        });
    }
    createClient( mapdb: ProductDB): Observable<ProductDB>{
      console.log(mapdb);
      return this.http.post('/testmodel', mapdb,{headers:this.headers_var}).map((response: Response) => response.json() as ProductDB).catch(err =>{
        return Observable.throw(err);
      });
    }
}
