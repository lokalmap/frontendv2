import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PchatRoutingModule } from './pchat-rtr.module';
import { PchatComponent } from './pchat.component';
import { ChatobjModule } from '../../shared';
//import { ModalModule } from 'ngx-bootstrap/modal'

@NgModule({
    imports: [
        CommonModule,
        PchatRoutingModule,
        ChatobjModule
    ],
    declarations: [PchatComponent]
})
export class PchatModule {
}
