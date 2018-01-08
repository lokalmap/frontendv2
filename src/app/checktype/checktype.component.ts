import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../services/user.service';
import { Routes, RouterModule } from '@angular/router';
import { Router} from '@angular/router';
import 'rxjs/add/operator/map'



@Injectable()
export class CheckTypeComponent {
    constructor(
      private http: Http,
      private router: Router,
      private userService: UserService) { }

      ngOnInit()
      {
        this.userService.getById(localStorage.getItem("currentUID"), localStorage.getItem("beJWT")).subscribe(
            result => {
              result;
                if(result === 'Provider'){
                  localStorage.setItem('daan','/providers');
                  console.log("inside provider : ", localStorage.getItem("daan"));
                }else if (result === 'Customer'){
                  localStorage.setItem('daan','/customers');
                  console.log("inside customer : ", localStorage.getItem("daan"));
                }

                  this.router.navigate([localStorage.getItem("daan")]);
            }

          )
      }



}
