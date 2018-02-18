import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthenticationService, UserService } from '../../services/index';
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    isLog:boolean = false;
    kkl:boolean = false;
    pushRightClass: string = 'push-right';

    constructor(private translate: TranslateService,
    public router: Router,
    private authenticationService: AuthenticationService,
    private usersrv: UserService){
        this.router.events.subscribe((val) => {
            if (val instanceof NavigationEnd && window.innerWidth <= 992 && this.isToggled()) {
                this.toggleSidebar();
            }
        });
    }

    ngOnInit() {
      this.isLog = new Boolean(localStorage.getItem('isLoggedin')).valueOf();
    }

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
     this.authenticationService.logout();
    }

    changeLang(language: string) {
        this.translate.use(language);
    }
}
