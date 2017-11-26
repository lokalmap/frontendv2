import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
@Component({
  selector: 'app-cbookings',
  templateUrl: './cbookings.component.html',
  styleUrls: ['./cbookings.component.scss'],
  animations: [routerTransition()]
})
export class CbookingsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
