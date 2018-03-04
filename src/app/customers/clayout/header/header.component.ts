import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Gvar } from '../../../var';
import { MapFastDB } from '../../../_models';
import { MapService } from '../../../services/map.service';
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    pushRightClass: string = 'push-right';

    constructor(private translate: TranslateService, public router: Router,private mapsrv: MapService) {
        this.router.events.subscribe((val) => {
            if (val instanceof NavigationEnd && window.innerWidth <= 992 && this.isToggled()) {
                this.toggleSidebar();
            }
        });
    }

    ngOnInit() {}

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

    onLoggedout() {
        //localStorage.removeItem('isLoggedin');
        console.log("afasfsa");
    }

    changeLang(language: string) {
        this.translate.use(language);
    }
    onSubmitFN(stextv?:string){
      //Gvar.v1 = stextv;
      //console.log("test value " + stextv);
        let testvarx = {
        	"x": "XXXX.FFFF",
        	"li": {
        		"banana": [{
        			"y": "YYYY.FFF1",
              "x": "XXXX.FFFq2",
              "pID": "Provider ID asd",
        			"iID": "Item ID 123",
              "price":1,
              "itmR":3,
        			"promo": ["datef(MM,DD,YY,hh,mm)", "Date2(MM,DD,YY,hh,mm)", "metadataURL"]
        		}, {
        			"y": "YYYY.FFF23",
              "x": "XXXX.FF2",
              "pID": "Provider ID asd",
              "iID": "Item ID 123",
              "price":1,
              "itmR":3,
              "promo": ["datef(MM,DD,YY,hh,mm)", "Date2(MM,DD,YY,hh,mm)", "metadataURL"]
        		}],
        		"apple": [{
              "y": "YYYY.FFF13q",
              "x": "XXXX.FFF2qq",
              "pID": "Provider ID asdq2wd",
        			"iID": "Item ID 613231122",
              "price":1,
              "itmR":3,
        			"promo": ["datef(MM,DD,YY,hh,mm)", "Date2(MM,DD,YY,hh,mm)", "metadataURL"]
        		}, {
              "y": "YYYY.FFFsa1",
              "x": "XXXX.FFFs2",
              "pID": "Provider ID 6889asd",
        			"iID": "Item ID 90876123",
              "price":1,
              "itmR":3,
        			"promo": ["datef(MM,DD,YY,hh,mm)", "Date2(MM,DD,YY,hh,mm)", "metadataURL"]
        		}]
        	},
        	"ads": [{
        			"name": "storename1;URL1",
        			"Desc": "Description Here",
        			"Tags": "aaa;bbb;ccc",
        			"MetaD": {
        				"data1": [1, 2, 3],
        				"data2": [4, 5, 6]
        			}
        		},
        		{
        			"name": "storename1;URL1",
        			"Desc": "Description Here",
        			"Tags": "aaa;bbb;ccc",
        			"MetaD": {
        				"data1": [1, 2, 3],
        				"data2": [4, 5, 6]
        			}
        		}
        	],
        	"premprov": ["prov1", "prov2", "prov3"],
        	"lstupd": "2018-02-19T15:14:29.646Z",
        	"providerctr": 0
        }
      //console.log("testv",testvarx);
      let testobj:any[] = this.mapsrv.transFN(testvarx);
      for (let item in testobj){
        console.log("val: " + item, testobj[item]);
      }

      console.log("final: ",testobj);

//      console.log("final2: ", createCacheDB());
    }
}
