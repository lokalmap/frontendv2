import { NgModule } from '@angular/core';
import { Component, OnInit, Input, Output, EventEmitter, TemplateRef } from '@angular/core';
@Component({
    selector: 'itemchat',
    templateUrl: './itemchat.component.html',
    styleUrls: ['./itemchat.component.scss']
})
export class ItemchatComponent implements OnInit {
    @Input() htmlvar:any;
    @Input() aleft:boolean;

    @Output() eventref: EventEmitter<any> = new EventEmitter();
    constructor() {
    }

    ngOnInit() {
    }
}
