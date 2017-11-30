import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-pchat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  animations: [routerTransition()]
})
export class PchatComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
