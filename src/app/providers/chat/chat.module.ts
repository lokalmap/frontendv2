import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PchatRoutingModule } from './chat-rtr.module';
import { PchatComponent } from './chat.component';
import { ChatComponent } from './components';
//import { ModalModule } from 'ngx-bootstrap/modal'

@NgModule({
    imports: [
        CommonModule,
        PchatRoutingModule
    ],
    declarations: [PchatComponent,ChatComponent]
})
export class PchatModule {
}
