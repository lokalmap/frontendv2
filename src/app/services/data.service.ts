import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

//import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  readonly ROOT_URL = 'http://192.168.1.18:3000/';
  constructor(private httpClient: Http) {//
    console.log('Dat  a service connected...')
  }

urlget(urlvar:string){
  console.log("Test Get urlvar: " + urlvar);

  return this.httpClient.get('https://jsonplaceholder.typicode.com/posts/1').map(res => res.json());
}
/*
urlPost(urlvar:string,jsonobj:any,headers:any){
  console.log("Test Post urlvar: " + urlvar);
  return this.http.post(urlvar,JSON.stringify(jsonobj),headers)
  .map(res => res.json());
}
*/
}
