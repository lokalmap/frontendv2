import { Component, OnInit,TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { routerTransition } from '../../router.animations';
import { CommonService } from '../../services/common.service';
import { ProductDB, ServiceDB} from '../../_models'
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms'; //test data
import { Data } from '../../_models/data.model';
@Component({
  selector: 'app-my-inventory',
  templateUrl: './my-inventory.component.html',
  styleUrls: ['./my-inventory.component.scss'],
  animations: [routerTransition()]
})
export class MyInventoryComponent implements OnInit {
  public modalRef:BsModalRef;
  dtHolderName;
  modaladdctr:number=0;
  tempschem:any;
  pdbvar:ProductDB = new ProductDB;
  sdbvar:ServiceDB = new ServiceDB;
   form: FormGroup; // test data

   data: Data[] = [
   new Data('Iphone7', '38.3 x 67.1 x 7.1 mm (5.44 x 2.64 x 0.28 in)', 12000, 5, 'small', '09062015',
    'Apple', 'iOS 10.0.1, upgradable to iOS 11.3', 'rex', '30%', 2909391, '9 days'),
   new Data('Iphone7', '38.3 x 67.1 x 7.1 mm (5.44 x 2.64 x 0.28 in)', 12001, 3, 'big', '09062016',
    'Apples', 'iOS 10.0.1, upgradable to iOS 11.45', 'hydie', '20%', 123313, '8 days'),
 ];

     // name,  Description, unit price, quantity, unitType



//  grpvars:any[] =  [
//    {
//      id:'1',
//      c:["2a","3a","4a","5a","6a","7a","8a","9a","10a","11a","12a","13a"]
//    },
//    {
//      id:'2',
//      c:["2b","3b","4b","5b","6b","7b","8b","9b","10b","11b","12b","13b"]
//    }
//  ];
  constructor(private modalService: BsModalService,
  private commonSrv: CommonService, private formBuilder: FormBuilder) {
    this.createForm();

   }
  public openModal(template: TemplateRef<any>) {
    console.log("++++++++++++");
    this.modalRef = this.modalService.show(template);
  }
  ngOnInit() {
  }
  getData(){
    console.log("get data");
  
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


  createForm() {
  this.form = this.formBuilder.group({
      select: ['', Validators.required],
      namestr: ['', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(15),
      ])],
      price: ['', Validators.required],
      cat: ['', Validators.required],
      qty: ['1', Validators.required],
      utype: ['', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(15),
      ])],
      desc: [''],
      caption: [''],
      tags: [''],
      brand: ['', Validators.required],
      variant: [''],
      sn_num: [''],
      features: [''],
      alias: [''],
      evdte: ['', Validators.required],
      searchTags: ['']
  });
}


onSubmit() {


  this.modaladdctr = 0;
  // Create user object from user's input
  const user = {
    select: this.form.get('select').value, // Username input field
    namestr: this.form.get('namestr').value, // Password input field
    price: this.form.get('price').value,
    cat: this.form.get('cat').value,
    qty: this.form.get('qty').value,
    utype: this.form.get('utype').value,
    desc: this.form.get('desc').value,
    caption: this.form.get('caption').value,
    tags: this.form.get('tags').value,
    brand: this.form.get('brand').value,
    variant: this.form.get('variant').value,
    features: this.form.get('features').value,
    alias: this.form.get('alias').value,
    evdte: this.form.get('evdte').value,
    searchTags: this.form.get('searchTags').value,
  }

  this.data.push({
     name: user.namestr,
     desc: user.desc,
     price: user.price,
     qty: user.qty,
     utype: user.utype,
     btcExp: Date(),
     brand: user.brand,
     itmInfo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt u ',
     supInfo: 'dipz',
     disc: '10%',
     cid: 10203848,
     vd: user.evdte
  });

  this.form.reset();



}


}
