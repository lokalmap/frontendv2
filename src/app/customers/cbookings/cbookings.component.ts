import { Component, OnInit, TemplateRef } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service'
import { CommonService } from '../../services/common.service'
@Component({
  selector: 'app-cbookings',
  templateUrl: './cbookings.component.html',
  styleUrls: ['./cbookings.component.scss'],
  animations: [routerTransition()]
})
export class CbookingsComponent implements OnInit {
  constructor(private modalService: BsModalService,
  private csrv:CommonService) { }
  public modalRef:BsModalRef

  ngOnInit() {
    for(let indx = 0 ; indx<this.ctxvars.length; indx++){
      this.ctxvars[indx].ccvar = this.bklistvar;
    }
  }
  openModal(template: TemplateRef<any>) {
    console.log("++++++++++++");
    this.modalRef = this.modalService.show(template);
  }
  reload(){
    console.log("Clicked Mok");
    let uid = localStorage.getItem('currentUID');
    this.csrv.getCBookingByUID(uid).subscribe(res=>{
      console.log("Clicked reload res ",res );
    },err => {
      console.log("Clicked reload with errors");
    });
  }
  private bklistvar:any[] =  [
    {
      id:'1',
      c:["2aaa","3a","4a","5a","6a"]
    },
    {
      id:'2',
      c:["2b","3bbb","4b","5b","6b"]
    },
    {
      id:'3',
      c:["2b","3bccc","4b","5b","6b"]
    }
  ];
  private ctxvars:any = [
    {
      ctvar:"Card title1",
      classCard:"card card-danger card-inverse mb-3",
      classCHead:"card-header card-danger",
      classCBlock:"card-block bg-white"
    },
    {
      ctvar:"Card title2",
      classCard:"card mb-3",
      classCHead:"card-header card-default",
      classCBlock:"card-block bg-white"
    },
    {
      ctvar:"Card title3",
      classCard:"card card-primary card-inverse mb-3",
      classCHead:"card-header card-primary",
      classCBlock:"card-block bg-white"
    },
    {
      ctvar:"Card title4",
      classCard:"card card-success card-inverse mb-3",
      classCHead:"card-header card-success",
      classCBlock:"card-block bg-white"
    },
    {
      ctvar:"Card title5",
      classCard:"card card-info card-inverse",
      classCHead:"card-header card-info",
      classCBlock:"card-block bg-white"
    },
    {
      ctvar:"Card title6",
      classCard:"card card-warning card-inverse mb-3",
      classCHead:"card-header",
      classCBlock:"card-block"
    },
    {
      ctvar:"Card title8",
      classCard:"card card-danger card-inverse",
      classCHead:"card-header card-default",
      classCBlock:"card-block bg-white"
    }
  ];
  childEvent(eventvar){
    console.log("Event triggered! : ")
    let varIndx = eventvar.i;
    if(varIndx !== undefined){

        console.log("eventvar.i : ",varIndx);
        if(eventvar.e == 'chldsend'){
          console.log("chldSend! ",eventvar);
//              let cdatev = ;
            eventvar.objRef.classCard = "card mb-3";
            eventvar.objRef.classCHead = "card-header card-default";
            eventvar.objRef.classCBlock = "card-block bg-white";
            let uid = localStorage.getItem('currentUID');
            this.csrv.postCBooking({usersDetailId:uid,clientAccId:uid,cdate:Date.now(),data:eventvar.objRef,status:0}).subscribe(res =>{
//                this.ctxvars[varIndx].classCard = "card mb-3";
//                this.ctxvars[varIndx].classCHead = "card-header card-default";
//                this.ctxvars[varIndx].classCBlock = "card-block bg-white";
            this.ctxvars[varIndx] = res.data;
            console.log("Post postCBooking : ", res);
          }, err => {
            console.log("error +++++++++++: " + err);
          });
        }else if(eventvar.e == 'chldDel'){
          this.ctxvars.splice(eventvar.i,1);
        }else if(eventvar.e == 'chldCancelBK'){
          console.log("chldCancelBK ",eventvar);
          let bkID = eventvar.bkID;
          this.csrv.deleteCBookingByUID(bkID).subscribe(res =>{
            //alert(res.id);
            console.log("Successfully deteleted ",res);
            this.ctxvars.splice(eventvar.i,1);
          },err =>{
            console.log("Error deleteCBookingByUID ",err);
          });

        }

    }
  }
}
