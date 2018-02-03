import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
@Component({
  selector: 'app-unauth',
  templateUrl: './unauth.component.html',
  styleUrls: ['./unauth.component.scss'],
  animations: [routerTransition()]
})
export class UnauthComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }
}
