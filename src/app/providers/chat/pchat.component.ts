import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { CommonService } from '../../services/common.service';
@Component({
  selector: 'app-pchat',
  templateUrl: './pchat.component.html',
  styleUrls: ['./pchat.component.scss'],
  animations: [routerTransition()]
})
export class PchatComponent implements OnInit {
  private cItemList:any={};
  private actvchatgrp:any={m:[]};
  constructor(private commonSrv: CommonService) { }
  ngOnInit() {
    this.cItemList = [
      {id:'id1',name:'name 0',timev:'1 mins ago',msg:'sample msg1',avtrimg:'http://placehold.it/50/FA6F57/fff'},
      {id:'id2',name:'name 1',timev:'2 mins ago',msg:'sample msg2',avtrimg:'http://placehold.it/50/55C1E7/fff'}
    ];
  }
  citemclicked(indx:number){
    let curUserID = localStorage.getItem('currentUID');
    this.actvchatgrp = {
      name: curUserID + " & " + this.cItemList[indx].id,
      m:[curUserID,this.cItemList[indx].id],
      citemID:curUserID + "~" + this.cItemList[indx].id
    }
    console.log('id : '+ this.cItemList[indx].id);
  }
  searchbutton(val:string){
    console.log("TESTING : ",val)
    this.commonSrv.seachUser(val).subscribe(res => {
      console.log("UsersDetails/search API result : ",res)
      if (res.ack){
        let tempv = {id:res.ack.id,name:res.ack.username,timev:'1 mins ago',msg:res.ack.email,avtrimg:'http://placehold.it/50/FA6F57/fff'};
        this.cItemList.push(tempv);
      }
    }, err => {
      console.log("this.commonSrv.seachUser(val) + : " + err)
    });
  }

}
