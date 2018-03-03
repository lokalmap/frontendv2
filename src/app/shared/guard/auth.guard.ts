import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';
@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router:Router) { }

    canActivate():boolean {
        if (localStorage.getItem('isLoggedin')) {
            console.log("nat");
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
}
@Injectable()
export class AuthGuard_CheckAccTypes implements CanActivate {
    constructor(private router:Router) { }
    canActivate(actRoute: ActivatedRouteSnapshot,state: RouterStateSnapshot):boolean {
      sessionStorage.setItem('stateroutes',state.url)
      let temp: string = localStorage.getItem('allowedRoutes') ;
      console.log("1 : " + temp);
      console.log("2 : " + actRoute.url[0].path);

      if (temp == actRoute.url[0].path){
          console.log("+++ T");
          return true
      }
      console.log("+++ F");
      this.router.navigate(['/'+temp]);
      return false;
    }
}
