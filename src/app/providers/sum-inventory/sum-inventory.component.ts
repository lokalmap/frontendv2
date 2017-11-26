import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-sum-inventory',
  templateUrl: './sum-inventory.component.html',
  styleUrls: ['./sum-inventory.component.scss'],
  animations: [routerTransition()]
})
export class SumInventoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
