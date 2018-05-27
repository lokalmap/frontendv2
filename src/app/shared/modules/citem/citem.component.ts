import { NgModule } from '@angular/core';
import { Component, OnInit, Input, Output, EventEmitter, TemplateRef } from '@angular/core';
@Component({
    selector: 'citem',
    templateUrl: './citem.component.html',
    styleUrls: ['./citem.component.scss']
})
export class CitemComponent implements OnInit {
    @Input() htmlvar:any;
    @Input() i:number;
    @Input() aleft:boolean;

    @Output() eventref: EventEmitter<any> = new EventEmitter();
    constructor() {
    }

    ngOnInit() {

    }
}
