import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-pbookings',
  templateUrl: './pbookings.component.html',
  styleUrls: ['./pbookings.component.scss'],
  animations: [routerTransition()]
})
export class PbookingsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
