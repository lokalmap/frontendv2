import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AdsRoutingModule } from './ads-rtr.module';
import { AdsComponent } from './ads.component';
//import { ModalModule } from 'ngx-bootstrap/modal'

@NgModule({
    imports: [
        CommonModule,
        AdsRoutingModule
//        ModalModule.forRoot(),
    ],
    declarations: [AdsComponent]
})
export class AdsModule {
}
