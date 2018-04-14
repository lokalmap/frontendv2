import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { UserService } from '../../../services/index';
import { UserInfo } from '../../../_models';
@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss'],
  animations: [routerTransition()]
})
export class SettingComponent implements OnInit {
  userinfo : UserInfo = new UserInfo;
  private renderflg:boolean = false;
  public isCollapsed = false;
  private pCat_var:any=['Electronic Devices','Electronic Accessories','Home Appliances','Health & Beauty','Babies & Toys','Sports & Travel','Automotive','Food & Beverages'];
  private sCat_var:any=['Accounting Services','Advertising Services','Auto Services','Building Services','Boat Services','Bridal Services','Business Services','Car Rental Agencies',
                          'Catering Services','Children’s Services','Check-Cashing Services','Cleaning Services','Check-Cashing Services','Consulting Services','Contractor Services',
                          'Copy-writing & Proof Services','Cover Letter/Resume Services','Dating Services','Decorating Services','Designing Services','DJ Businesses','Dry Cleaning & Laundry',
                          'Editorial Services','Educational Services','Electrical Services','Employment Services','Environmental Services','Errand Services','Event Planning','Eye-Care Centers',
                          'Financial Services','Fitness Centers','Hair Salons','Handyman Services','Health-Care Services','Home-Improvement Services','Lawn Care & Landscaping','Limousine Services',
                          'Maintenance Services','Message Therapist','Moving Services','Painting Services','Personal-Care Services','Personal Chef','Pest Control Services','Pet-Care Services',
                          'Photography Services','Plant Maintenance Services','Plumbing Services','Pool Services','Postal & Business Centers','Printing Services','Private Investigation',
                          'Property Inspection','Property Management Services','Publishing Services','Real Estate Services','Recreational Services','Referral Services','Remodeling/Renovation Services',
                          'Repair Services','Security Services','Senior Care Services','Shipping Services','Shoe Repair','Sign Stores','Staffing Services','Tanning Services','Tax Services',
                          'Tech Services','Travel Agencies','Training Businesses','Tutoring Services','Videotaping Services','Web-Site Services','Wedding Services','Weight-Control Centers','Miscellaneous Services'];
  constructor(private usersrv: UserService) { }
  get sCatModel() {
    return this.sCat_var
  }
  get pCatModel() {
    return this.pCat_var
  }
  set sCatModel(val) {
    try{
    }catch(e){
      this.sCat_var = val;
      console.log('error occured',e);
    };
  }
  set pCatModel(val) {
    try{
      this.pCat_var = val;
    }catch(e){
      console.log('error occured',e);
    };
  }
  onsaved_cat(){
    console.log('onsaved_cat');
  }
  ngOnInit() {
    this.renderflg = false;
    this.usersrv.getById(sessionStorage.getItem('currentUID')).subscribe(response => {
        this.userinfo =  response as UserInfo;
      }, err => {
        console.log("error +++++++++++: " + err);
      }
    );
    this.renderflg = true;
  }
}
