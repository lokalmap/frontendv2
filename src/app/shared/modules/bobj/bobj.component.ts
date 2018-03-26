import { NgModule } from '@angular/core';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'bobj',
    templateUrl: './bobj.component.html'
})
export class BObjComponent implements OnInit {
    @Input() classObj:any
    @Input() objIndx:number;
    @Input() objCB:string;
    @Output() eventref: EventEmitter<any> = new EventEmitter();
    private chldclassObj:any;
    private chldInfoID:string;
    private chldRIndx:number;
    private statmsg:string;
/*
    classCard:string;
    classCHead:string;
    classCBlock: string;
    ctvar:string;
    ccvar:string;
    @Output() event: EventEmitter<any> = new EventEmitter();
*/
    constructor() {
    }
    onsave(){
      if(this.chldclassObj){
        if(this.chldInfoID){
          this.eventref.emit({try:"Onsave"});
        }else {
            this.eventref.emit({e:"chldSave",i:this.objIndx,objRef:this.chldclassObj});
        }
      }
    }
    onsend(){
      if(this.chldclassObj){
        if(this.chldInfoID){
          this.eventref.emit({try:"Onsend"});
        }else {
            this.eventref.emit({e:"chldsend",i:this.objIndx,objRef:this.chldclassObj});
        }
      }
    }
    chldDelete(){
      console.log("chldDelete");
      this.eventref.emit({e:"chldDel",i:this.objIndx});
    }
    ngOnInit() {
      this.statmsg = "aa";
      console.log('classObj',this.classObj);
      console.log('objIndx : ' + this.objIndx);
      console.log('objType : ' + this.objCB);
      this.chldclassObj = this.classObj;
      this.chldInfoID= this.classObj.infoID;
      this.chldRIndx = this.classObj.chldRIndx;
    }

}
