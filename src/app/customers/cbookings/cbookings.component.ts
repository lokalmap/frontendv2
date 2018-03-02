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
  ctxvars:any = [
    {
      cardTitl:"Card title1",
      cardContent:"Card Content1",
      classv1:"card card-danger card-inverse mb-3",
      classv2:"card-header card-danger",
      classv3:"card-block bg-white"
    },
    {
      cardTitl:"Card title2",
      cardContent:"Card Content2",
      classv1:"card mb-3",
      classv2:"card-header card-default",
      classv3:"card-block bg-white"
    },
    {
      cardTitl:"Card title3",
      cardContent:"Card Content3",
      classv1:"card card-primary card-inverse mb-3",
      classv2:"card-header card-primary",
      classv3:"card-block bg-white"
    },
    {
      cardTitl:"Card title4",
      cardContent:"Card Content4",
      classv1:"card card-success card-inverse mb-3",
      classv2:"card-header card-success",
      classv3:"card-block bg-white"
    },
    {
      cardTitl:"Card title5",
      cardContent:"Card Content5",
      classv1:"card card-info card-inverse",
      classv2:"card-header card-info",
      classv3:"card-block bg-white"
    },
    {
      cardTitl:"Card title6",
      cardContent:"Card Content6",
      classv1:"card card-warning card-inverse mb-3",
      classv2:"card-header",
      classv3:"card-block"
    },
    {
      cardTitl:"Card title7",
      cardContent:"Card Content7",
      classv1:"card card-info card-inverse",
      classv2:"card-header",
      classv3:"card-block"
    },
    {
      cardTitl:"Card title8",
      cardContent:"Card Content8",
      classv1:"card card-danger card-inverse",
      classv2:"card-header card-default",
      classv3:"card-block bg-white"
    }
  ];
}
