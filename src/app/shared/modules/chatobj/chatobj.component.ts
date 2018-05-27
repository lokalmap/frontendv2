import { Component, OnInit,Input, Output, EventEmitter, } from '@angular/core';

@Component({
    selector: 'app-chatobj',
    templateUrl: './chatobj.component.html',
    styleUrls: ['./chatobj.component.scss']
})
export class ChatobjComponent implements OnInit {
    @Input() chatIDs:any;
    @Output() eventref: EventEmitter<any> = new EventEmitter();
    constructor() { }
    private prnthtmlvar:any
    ngOnInit() {
      console.log("chatIDs member", this.chatIDs.m);
      this.prnthtmlvar = [{
        name:'Jack Sparrow',
        timev:'12 mins ago',
        msg:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.',
        avtrimg:'http://placehold.it/50/55C1E7/fff'
      },
      {
        name:'Bhaumik Patel',
        timev:'12 mins ago',
        msg:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.',
        avtrimg:'http://placehold.it/50/FA6F57/fff'
      }]
    }
}
