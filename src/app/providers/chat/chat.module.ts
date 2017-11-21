import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PchatRoutingModule } from './chat-rtr.module';
import { PChatComponent } from './chat.component';
//import { ModalModule } from 'ngx-bootstrap/modal'

@NgModule({
    imports: [
        CommonModule,
        PchatRoutingModule
//        ModalModule.forRoot(),
    ],
    declarations: [PChatComponent]
})
export class PchatModule {
}
