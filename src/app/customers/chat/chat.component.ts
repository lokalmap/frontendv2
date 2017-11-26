import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
@Component({
  selector: 'app-cchat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  animations: [routerTransition()]
})
export class CchatComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

//<div [@routerTransition]>

//</div>
