import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ActivatedRoute, Params, UrlSegment  } from '@angular/router';
import { UserService } from '../../services/index';
import { UserInfo } from '../../_models';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'app-info',
  templateUrl: './info-edit.component.html',
  styleUrls: ['./info-edit.component.scss'],
  animations: [routerTransition()]
})
export class InfoeditComponent implements OnInit {
  constructor(
    private actvroute: ActivatedRoute,
    protected usersrv: UserService
  ) { }
  private renderflg:boolean = false;
  userinfo : UserInfo =new UserInfo;
  idstring:string = ""
  ngOnInit() {
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
        this.userinfo.status = 'Pending';
        this.userinfo._id = localStorage.getItem('currentUID');
        this.renderflg = true;
      });
      this.idstring = this.userinfo._id;
      console.log("id :    " + this.idstring)
      this.renderflg = true;
  }
  onFSubmit(){

    let temp :string = sessionStorage.getItem('currentUID');
    if (temp.length > 1)
    {
      this.renderflg = false;
      this.userinfo.id = temp;
      this.usersrv.createClient(this.userinfo).subscribe(response => {
        this.userinfo =  response as UserInfo;
        }, err => {
          console.log("error post : " + err);
        });

    }else{
      const segments: UrlSegment[] = this.actvroute.snapshot.url;
      console.log("test id : " + segments[segments.length-1]);
      this.usersrv.putById(segments[segments.length-1].toString(),this.userinfo).subscribe(response => {
          this.userinfo =  response as UserInfo;
        }, err => {
          console.log("error +++++++++++: " + err);
        });
    }
    this.renderflg = true;
  }
}
