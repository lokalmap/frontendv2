import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { Router, ActivatedRoute, Params, UrlSegment  } from '@angular/router';
import { UserService } from '../../../services/index';
import { UserInfo } from '../../../_models';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'app-info-edit',
  templateUrl: './info-edit.component.html',
  styleUrls: ['./info-edit.component.scss'],
  animations: [routerTransition()]
})
export class InfoeditComponent implements OnInit {
  constructor(
    private actvroute: ActivatedRoute,
    protected usersrv: UserService,
    private router: Router
  ) { }
  private renderflg:boolean = false;
  userinfo : UserInfo =new UserInfo;
  returl_flg:boolean =  true;
  idstring:string = ""
  ngOnInit() {
    this.returl_flg = true;
    this.renderflg = false;
    this.actvroute.params.switchMap((params:Params) => {
      let id = params['id'];
      console.log("id: " + id);
      return this.usersrv.getById(id);
    }).subscribe(response => {
        this.userinfo =  response as UserInfo;
        this.renderflg = true;
      }, err => {
        this.renderflg = false;
        console.log("nonexisting ID");
        let CUID:string = sessionStorage.getItem('currentUID');
        this.userinfo.status = 'Pending';
        this.userinfo._id = CUID;
        this.usersrv.getUserByID(CUID).subscribe(response => {
          console.log("HERE  !!! " + response);
            this.userinfo.username =  response.username;
            this.userinfo.emailAddr =  response.email;
            this.returl_flg = false;
            this.renderflg = true;
          }, err => {
            console.log("error getUserByID(CUID): " + err);
          });
      });
      this.idstring = this.userinfo._id;
      console.log("id :    " + this.idstring)
      this.renderflg = true;
  }
  onFSubmit(){
    let temp :string = sessionStorage.getItem('currentUID');

    this.usersrv.checkClientAccExists(temp).subscribe(response => {
      console.log("Check ++    " + temp + " : " +  response.exists);
      if (!response.exists){
        this.renderflg = false;
        this.userinfo.id = temp;
        let temp_flg:boolean = false;
        this.usersrv.createClient(this.userinfo).subscribe(response => {
          this.userinfo =  response as UserInfo;
          temp_flg = true;
          }, err => {
            console.log("error post : " + err);
          });
          if (temp_flg) {
            this.router.navigate(['/']);
          }
      }else
      {
        console.log("FALSE temp.length : " + temp.length);
        const segments: UrlSegment[] = this.actvroute.snapshot.url;
        console.log("test id : " + segments[segments.length-1]);
        this.usersrv.putById(segments[segments.length-1].toString(),this.userinfo).subscribe(response => {
            this.userinfo =  response as UserInfo;
            this.router.navigate(['/info']);
          }, err => {
            console.log("error +++++++++++: " + err);
          });
      }
    });
    this.renderflg = true;
  }
}
