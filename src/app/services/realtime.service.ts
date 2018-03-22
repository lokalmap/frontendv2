import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import * as socketIo from 'socket.io-client';
import {appConfig} from "../app.config";
//import {AuthService} from "./auth.service";
import {Subject} from "rxjs";

@Injectable()
export class RealtimeService {
    public socket;
    private cachedInfo: any[] = [];
    private userId: string;

    constructor() {
        this.userId = localStorage.getItem('currentUID');//this.auth.getCurrentUserId();
    }

    connect(): void {
        console.log(";;;;;;;;;;;;;;;;;;;;");
        let accessTokenId = localStorage.getItem('beJWT');//this.auth.getAccessTokenId();
        let userIdx = localStorage.getItem('currentUID');//this.auth.getCurrentUserId();
        let serverURL = 'http://localhost:3000';//appConfig.apiUrl;//ApiConfig.getPath();
        this.socket = socketIo(serverURL);
        this.socket.emit('authentication', {id: accessTokenId, userId: userIdx});

        this.socket.on('authenticated', () => {
          console.log("Authenticated!");
        });

        this.socket.on("disconnect", () => {
            console.log("disconnected!");
        });

/*
        this.auth.onAuthChange$.subscribe(user => {

            let token = this.auth.getAccessTokenId();
            let uid: string;
            if (user && user.id) {
                uid = user.id;
            }
            if (uid !== this.userId) {
                this.unSubscribeUser(this.userId);
                this.reconnect();
                this.userId = uid;
            }
        });
*/
    }

    reconnect() {
        this.disconnect();
        this.connect();
    }

    disconnect() {
        this.socket.disconnect();
    }

    observable(sesentry: string,infosheetID?:string): Observable<any> {
        console.log("~~~~~~~~~~~~~~~~~~~~~~~",1);
        let userId = localStorage.getItem('currentUID');//this.auth.getCurrentUserId();
        try {
          if (!this.socket.connected) {
              console.log("~~~~~~~~~~~~~~~~~~~~~~~",2);
              this.connect();
          }
        }
        catch(e) {
//          console.log(e);
          this.connect();
        }

        console.log("~~~~~~~~~~~~~~~~~~~~~~~",3);
        let subject: Subject<any> = new Subject<any>();

        if (sesentry) {
            console.log("sesentry : ", sesentry);
            console.log("infosheetID : ", infosheetID);
            this.socket.on(sesentry, (data: any) => {
                subject.next(data);
            });

            let infoSubscription = userId ? userId : "everyone";

            let cachedInfoObj: any = {
                infoID: infosheetID,
                sesentry: sesentry,
                dateaccessed:Date.now()
            };
            this.cachedInfo.push(cachedInfoObj);
        }
        return subject.asObservable();
    }

    unSubscribeAll(): void {
        for (let i = 0; i < this.cachedInfo.length; i++) {
            this.socket.removeAllListeners(this.cachedInfo[i]);
        }
        this.cachedInfo = [];
    }

    unSubscribeInfo(value:any): void {
      let infoID = value.infoID;
      let sesentry = value.sesentry;
      console.log("inside unSubs : ",value);
        if (this.cachedInfo && this.cachedInfo.length) {
          console.log("this.cachedInfo old val: ",this.cachedInfo);
          if (sesentry){
            for (let i = 0; i < this.cachedInfo.length; i++) {
              if (this.cachedInfo[i].sesentry == sesentry && this.cachedInfo[i].infoID == infoID){
                console.log("removeAllListeners : ",this.cachedInfo[i]);
                this.cachedInfo.splice(i, 1);
                this.socket.removeAllListeners(this.cachedInfo[i]);
                return;
              }
            }
          }
        }
    }
}
