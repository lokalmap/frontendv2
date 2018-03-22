import { NgModule } from '@angular/core';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'monstat',
    templateUrl: './monstat.component.html'
})
export class MonstatComponent implements OnInit {
    @Input() classObj:any
    @Input() objIndx:number;
    @Output() eventref: EventEmitter<any> = new EventEmitter();
    private chldclassObj:any;
    private chldInfoID:string;
    private chldRIndx:number;
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
      console.log("onSaved ");
      if(this.chldclassObj){
        if(this.chldInfoID){
          this.eventref.emit({try:"try"});
        }else {
            this.eventref.emit({e:"chldSave",i:this.objIndx,objRef:this.chldclassObj});
        }
      }
    }
    chldDelete(){
      console.log("chldDelete");
      this.eventref.emit({e:"chldDel",i:this.objIndx});
    }
    ngOnInit() {
      console.log('classObj',this.classObj);
      console.log('objIndx : ' + this.objIndx);
      this.chldclassObj = this.classObj;
      this.chldInfoID= this.classObj.infoID;
      this.chldRIndx = this.classObj.chldRIndx;
    }

}
