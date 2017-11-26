import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { StRoutingModule } from './st-rtr.module';
import { StorehistComponent } from './storehist.component';
//import { ModalModule } from 'ngx-bootstrap/modal'

@NgModule({
    imports: [
        CommonModule,
        StRoutingModule
//        ModalModule.forRoot(),
    ],
    declarations: [StorehistComponent]
})
export class StModule {
}
