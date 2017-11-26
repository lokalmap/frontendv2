import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BkRoutingModule } from './bk-rtr.module';
import { BookinghistComponent } from './bookinghist.component';
//import { ModalModule } from 'ngx-bootstrap/modal'

@NgModule({
    imports: [
        CommonModule,
        BkRoutingModule
//        ModalModule.forRoot(),
    ],
    declarations: [BookinghistComponent]
})
export class BkModule {
}
