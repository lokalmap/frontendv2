import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
@Component({
  selector: 'app-info',
  templateUrl: './info-edit.component.html',
  styleUrls: ['./info-edit.component.scss'],
  animations: [routerTransition()]
})
export class InfoeditComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
