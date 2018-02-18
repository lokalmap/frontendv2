import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { UserService } from '../../../services/index';
import { UserInfo } from '../../../_models';
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
  animations: [routerTransition()]
})
export class InfoComponent implements OnInit {
  userinfo : UserInfo = new UserInfo;
  private renderflg:boolean = false;
  constructor(private usersrv: UserService) { }

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
