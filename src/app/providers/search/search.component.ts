import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  animations: [routerTransition()]
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
