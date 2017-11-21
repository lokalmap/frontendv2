import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MyinvRoutingModule } from './myinv-rtr.module';
import { MyInventoryComponent } from './my-inventory.component';
import { ModalModule } from 'ngx-bootstrap/modal'

@NgModule({
    imports: [
        CommonModule,
        MyinvRoutingModule,
        ModalModule.forRoot(),
    ],
    declarations: [MyInventoryComponent]
})
export class MyinventoryModule {
}
