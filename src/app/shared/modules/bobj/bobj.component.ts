import { NgModule } from '@angular/core';
import { Component, OnInit, Input, Output, EventEmitter, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service'
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
    private grpvars:any[] =  [
      {
        id:'1',
        c:["2a","3a","4a","5a","6a"]
      },
      {
        id:'2',
        c:["2b","3b","4b","5b","6b"]
      },
      {
        id:'3',
        c:["2b","3b","4b","5b","6b"]
      }
    ];
    public modalRef:BsModalRef
    constructor(private modalService: BsModalService) {
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
        if (confirm("Confirm?")){
          if(this.chldInfoID){
            this.eventref.emit({try:"Onsend"});
          }else {
              this.eventref.emit({e:"chldsend",i:this.objIndx,objRef:this.chldclassObj});
          }
          this.modalRef.hide();
        }
      }

    }
    chldDelete(){
      console.log("chldDelete");
      if (confirm("Confirm?")){
        this.eventref.emit({e:"chldDel",i:this.objIndx});
        this.modalRef.hide();
      }
    }
    childCancelBK(bkID:string){
      if (bkID){
        console.log("childCancelBK !!! ");
        this.eventref.emit({e:"chldCancelBK",i:this.objIndx,bkID:bkID});
        this.modalRef.hide();
      }else{ alert("Please Enter Booking ID Number")}

    }
    ngOnInit() {
      this.statmsg = "aa";
      console.log('classObj',this.classObj);
      console.log('objIndx : ' + this.objIndx);
      console.log('objType : ' + this.objCB);
      this.chldclassObj = this.classObj;
      this.chldInfoID= this.classObj.infoID;
      this.chldRIndx = this.classObj.chldRIndx;
      let bklist = this.classObj.ccvar;
      if (bklist){
        this.grpvars = bklist;
      }
    }
    openModal(template: TemplateRef<any>) {
      console.log("++++++++++++");
      this.modalRef = this.modalService.show(template);
    }
}
