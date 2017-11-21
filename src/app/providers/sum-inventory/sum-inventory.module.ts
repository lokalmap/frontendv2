import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { InvSumRoutingModule } from './invsum-rtr.module';
import { SumInventoryComponent } from './sum-inventory.component';
//import { ModalModule } from 'ngx-bootstrap/modal'

@NgModule({
    imports: [
        CommonModule,
        InvSumRoutingModule
//        ModalModule.forRoot(),
    ],
    declarations: [SumInventoryComponent]
})
export class InvsumModule {
}
