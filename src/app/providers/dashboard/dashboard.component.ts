import { Component, OnInit,TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { routerTransition } from '../../router.animations';

//npm install ngx-bootstrap --save
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
  var_currency:string;
  var_sbook_amt:number;
  var_sbook_ctr:number;
  var_pbook_amt:number;
  var_pbook_ctr:number;
  var_cbook_amt:number;
  var_cbook_ctr:number;
  var_tvisitor_ctr:number;
  var_nclient_ctr: number;
  var_adshit_ctr: number;
  var_weekly_v_ctr: number;
  var_searchv_ctr:number;
  var_endr_ctr: number;
  var_org_ctr: number;
  var_endr: number;
  var_total_bookings:number;
  var_r_sb_vs_tb:number;
  var_arr_week_t:number[];
  var_arr_week_b:number[];
  var_gender_stats:number[];
  var_arr_ads_stats:number[];
  var_arr_ads_stats_pcnt:number[];
  var_test:boolean;
  var_test1:boolean;
  var_test2:boolean;
  var_test3:boolean;


  constructor() { }
  ngOnInit() {
    this.var_currency = 'php';
    this.var_sbook_ctr = 9999;
    this.var_sbook_amt = 50000;
    this.var_pbook_ctr = 2;
    this.var_pbook_amt = 2;
    this.var_cbook_ctr = 1;
    this.var_cbook_amt = 10;
    this.var_tvisitor_ctr = 1234;
    this.var_nclient_ctr = 1000;
    this.var_adshit_ctr = 22500;
    this.var_weekly_v_ctr = 14002;
    this.var_test = false;
    this.var_test1 = false;
    this.var_test2 = false;
    this.var_test3 = false;

    this.var_total_bookings = this.var_sbook_ctr + this.var_pbook_ctr + this.var_cbook_ctr;
    this.var_r_sb_vs_tb = this.var_sbook_ctr*100 / this.var_total_bookings;
    this.var_arr_week_t =  [10,20,30,40,60,70,100];
    this.var_arr_week_b =  [100,20,50,10,60,45,15];
    this.var_gender_stats = [40,37];
    this.var_arr_ads_stats = [191235,51223,37564,27319];
    this.var_searchv_ctr = this.var_arr_ads_stats.reduce((a,b) => a+b,0);
    this.var_arr_ads_stats_pcnt = this.var_arr_ads_stats.map((a) => (a*100)/this.var_searchv_ctr);
    this.var_arr_ads_stats_pcnt = this.var_arr_ads_stats_pcnt.map((a) => Math.round(a*10)/10);
    console.log("this.var_arr_ads_stats_pcnt : " + this.var_arr_ads_stats_pcnt)
  }

  click(){
    this.var_test = true;

  }

  pbook() {
    this.var_test1 = true;

  }

  cbook() {
    this.var_test2 = true;
  }

  visit() {
    this.var_test3 = true;
  }

  hide() {
      this.var_test = false;
  }

  hide1(){
    this.var_test1 = false;
  }

  hide2(){
    this.var_test2 = false;
  }

  hide3(){
    this.var_test3 = false;
  }

}
