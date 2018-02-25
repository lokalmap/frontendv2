import { Component, OnInit,TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { routerTransition } from '../../router.animations';
import { CommonService } from '../../services/common.service';
import { ProductDB, ServiceDB} from '../../_models'
@Component({
  selector: 'app-my-inventory',
  templateUrl: './my-inventory.component.html',
  styleUrls: ['./my-inventory.component.scss'],
  animations: [routerTransition()]
})
export class MyInventoryComponent implements OnInit {
  public modalRef:BsModalRef;
  modaladdctr:number=0;
  tempschem:any;
  pdbvar:ProductDB = new ProductDB;
  sdbvar:ServiceDB = new ServiceDB;
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
  onSubmitFN(fvar: any){
    console.log("fvar.value.gentype: " + fvar.value.gentype);
    if (fvar.value.gentype == 'Product'){
      console.log('pREEE : ');
            this.commonSrv.postClientAccbyIDCustom(localStorage.getItem('currentUID'),'product-DB-AAtoDDs',this.transformFN(fvar.value)).subscribe(response => {
              console.log("+++++++++++++++++");
            }, err => {
              console.log("authentication.service.ts errors + : " + err)
            });

    }else{
      console.log("else");
      /*
          this.commonSrv.postClientAccbyIDCustom('5a87d0adabb77a366480ac9a','product-DB-AAtoDDs',this.tempschem).subscribe(response =>{
            console.log("response : " , response);
          });
      */
    }

    this.modaladdctr = 0;
    console.log("test2");
  }
  checkfn(xvar:any):Boolean{
    if (xvar == "" || xvar == " " || xvar == null || xvar === null || typeof xvar === 'undefined') { return false; }
    return true;
  }
  transformFN(inptobj:any):any{
    console.log("test : ",inptobj);
    if (this.checkfn(inptobj.namestr)){
      this.pdbvar.name = inptobj.namestr;
    }
    if (this.checkfn(inptobj.cat)){
      this.pdbvar.categoryA = inptobj.cat;
    }
    if (this.checkfn(inptobj.desc)){
      this.pdbvar.modelDesc = inptobj.desc;
    }
    if (this.checkfn(inptobj.name)){
      this.pdbvar.name = inptobj.name;
    }
    if (this.checkfn(inptobj.utype)){
      this.pdbvar.unitType = inptobj.utype;
    }
    if (this.checkfn(inptobj.tags)){
      this.pdbvar.tags = inptobj.tags;
    }

    /*
    if (this.checkfn()){

    }
    if (this.checkfn()){
    }
    */
    return this.pdbvar;
  }
}
