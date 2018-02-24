import { Component, OnInit,TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { routerTransition } from '../../router.animations';
import { CommonService } from '../../services/common.service';
@Component({
  selector: 'app-my-inventory',
  templateUrl: './my-inventory.component.html',
  styleUrls: ['./my-inventory.component.scss'],
  animations: [routerTransition()]
})
export class MyInventoryComponent implements OnInit {
  public modalRef:BsModalRef;
  modaladdctr:number=0;
  constructor(private modalService: BsModalService,
  private commonSrv: CommonService) { }
  public openModal(template: TemplateRef<any>) {
    console.log("++++++++++++");
    this.modalRef = this.modalService.show(template);
  }
  ngOnInit() {
  }
  callthisf(){
    console.log("test1");
  }
  backfn(){
    this.modaladdctr--;
    console.log("-- : " + this.modaladdctr);
  }
  nextfn(){
    this.modaladdctr++;
    console.log("++ : " + this.modaladdctr);
  }
  onSubmitFN(){
    //this.commonSrv.
    this.modaladdctr = 0;
    console.log("test2");
  }
}
