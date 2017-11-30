import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
@Component({
  selector: 'app-cchat',
  templateUrl: './cchat.component.html',
  styleUrls: ['./cchat.component.scss'],
  animations: [routerTransition()]
})
export class CchatComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
