import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { MapFastDB } from '../_models';

interface CacheDBItm{
  name?:string;
  x?:string;
  y?:string;
  pID?:string;
  iID?:string;
  price?:number;
  promo?:any;
  itmR?:number;
}
interface CacheDBItmGrp{
  itemGrpName:string;
  cDBList:CacheDBItm[];
}
interface CacheDBInfo{
  id:string;
  Info:any[];
}
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
    transFN(mapdb: any):any{
      let xh:string;
      let objtmp:any;
      let retval:any[]=[];
      let cdbtemp:CacheDBItm;
      for (let itmxid in mapdb){
//        console.log("line: ",typeof itmxid, itmxid, mapdb[itmxid]);
//        console.log("testv : " + '{"' + itmxid + '":"' + mapdb[itmxid] + '"}');
        switch (itmxid)
        {
            case "x":{
              xh =  mapdb[itmxid];
              break;
            }
            case "li":{
              objtmp = mapdb[itmxid];
              for (let itm in objtmp){
                let ctmp: CacheDBItmGrp={itemGrpName:"",cDBList:[]};
                ctmp.itemGrpName = itm;
                let cdbtemp:CacheDBItm = {name:"",x:"",y:"",pID:"",iID:"",price:0,promo:{},itmR:0}
                updXCacheDB(cdbtemp,JSON.parse('{"name":"' + itm + '"}'));
                let itmobj = objtmp[itm]
                for (let j=0,len=itmobj.length;j<len;++j){
                  let dtls = itmobj[j];
                  console.log("-----------------debug : ",dtls);
                  cdbtemp = {x:"",y:"",pID:"",iID:"",price:0,promo:{},itmR:0}
                  for (let dtl in dtls){
                      updXCacheDB(cdbtemp,JSON.parse('{"' + dtl + '":"' + dtls[dtl] + '"}'));
                  }
                  ctmp.cDBList.push(cdbtemp);

                }
                console.log("view: ",ctmp);
                retval.push(ctmp);
              }
              break;
            }
        }
      }
      return retval;
    }
}
/*
function createCacheDB(cdbconfig: CachedbItm):{name?:string; x?:string; y?:string; sID?:string; iID?:string; price?:number; promo?:any; itmR?:number}{
      let newcdb:CachedbItm;
      if (cdbconfig.name){ newcdb.name = cdbconfig.name; }
      if (cdbconfig.x){ newcdb.x = cdbconfig.x; }
      if (cdbconfig.y){ newcdb.y = cdbconfig.y; }
      if (cdbconfig.sID){ newcdb.sID = cdbconfig.sID; }
      if (cdbconfig.iID){ newcdb.iID = cdbconfig.iID; }
      if (cdbconfig.price){ newcdb.price = cdbconfig.price; }
      if (cdbconfig.itmR){ newcdb.itmR = cdbconfig.itmR; }
      return newcdb;
}
*/
function updXCacheDB(varref:CacheDBItm,cdbconfig: CacheDBItm){
  if (cdbconfig.name){ varref.name = cdbconfig.name; }
  if (cdbconfig.x){ varref.x = cdbconfig.x; }
  if (cdbconfig.y){ varref.y = cdbconfig.y; }
  if (cdbconfig.pID){ varref.pID = cdbconfig.pID; }
  if (cdbconfig.iID){ varref.iID = cdbconfig.iID; }
  if (cdbconfig.price){ varref.price = cdbconfig.price; }
  if (cdbconfig.promo){ varref.promo = cdbconfig.promo; }
  if (cdbconfig.itmR){ varref.itmR = cdbconfig.itmR; }
}
