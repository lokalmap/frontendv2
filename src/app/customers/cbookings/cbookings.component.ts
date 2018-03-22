import { Component, OnInit, TemplateRef } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
@Component({
  selector: 'app-cbookings',
  templateUrl: './cbookings.component.html',
  styleUrls: ['./cbookings.component.scss'],
  animations: [routerTransition()]
})
export class CbookingsComponent implements OnInit {
  constructor(private modalService: BsModalService) { }
  public modalRef:BsModalRef

  ngOnInit() {
  }
  openModal(template: TemplateRef<any>) {
    console.log("++++++++++++");

    this.modalRef = this.modalService.show(template);
  }
  reloadMok(){
    console.log("Clicked Mok");
    this.modalRef.hide();
  }

  ctxvars:any = [
    {
      ctvar:"Card title1",
      ccvar:"Card Content1",
      classCard:"card card-danger card-inverse mb-3",
      classCHead:"card-header card-danger",
      classCBlock:"card-block bg-white"
    },
    {
      ctvar:"Card title2",
      ccvar:"Card Content2",
      classCard:"card mb-3",
      classCHead:"card-header card-default",
      classCBlock:"card-block bg-white"
    },
    {
      ctvar:"Card title3",
      ccvar:"Card Content3",
      classCard:"card card-primary card-inverse mb-3",
      classCHead:"card-header card-primary",
      classCBlock:"card-block bg-white"
    },
    {
      ctvar:"Card title4",
      ccvar:"Card Content4",
      classCard:"card card-success card-inverse mb-3",
      classCHead:"card-header card-success",
      classCBlock:"card-block bg-white"
    },
    {
      ctvar:"Card title5",
      ccvar:"Card Content5",
      classCard:"card card-info card-inverse",
      classCHead:"card-header card-info",
      classCBlock:"card-block bg-white"
    },
    {
      ctvar:"Card title6",
      ccvar:"Card Content6",
      classCard:"card card-warning card-inverse mb-3",
      classCHead:"card-header",
      classCBlock:"card-block"
    },
    {
      ctvar:"Card title8",
      ccvar:"Card Content8",
      classCard:"card card-danger card-inverse",
      classCHead:"card-header card-default",
      classCBlock:"card-block bg-white"
    }
  ];
  childEvent(eventvar){
    console.log("Event triggered! : ")
    if(eventvar.i !== undefined){
        console.log("eventvar.i : ",eventvar.i);
        if(eventvar.e == 'chldSave'){
          console.log("chldSave! ",eventvar);

        }else if(eventvar.e == 'chldDel'){
          this.ctxvars.splice(eventvar.i,1);
        }

    }
  }
}
