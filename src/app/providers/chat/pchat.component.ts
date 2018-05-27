import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-pchat',
  templateUrl: './pchat.component.html',
  styleUrls: ['./pchat.component.scss'],
  animations: [routerTransition()]
})
export class PchatComponent implements OnInit {
  private cItemList:any={};
  private actvchatgrp:any={m:[]};
  constructor() { }
  ngOnInit() {
    let curUserID = localStorage.getItem('currentUID');
    this.actvchatgrp.m = ['guestid123',curUserID];
    this.cItemList = [
      {name:'name 0',timev:'1 mins ago',msg:'sample msg1',avtrimg:'http://placehold.it/50/FA6F57/fff'},
      {name:'name 1',timev:'2 mins ago',msg:'sample msg2',avtrimg:'http://placehold.it/50/55C1E7/fff'}
    ];
  }

}
