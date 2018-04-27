import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-pchat',
  templateUrl: './pchat.component.html',
  styleUrls: ['./pchat.component.scss'],
  animations: [routerTransition()]
})
export class PchatComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
