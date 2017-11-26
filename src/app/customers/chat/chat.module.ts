import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CchatRoutingModule } from './chat-rtr.module';
import { CchatComponent } from './chat.component';
//import { ModalModule } from 'ngx-bootstrap/modal'

@NgModule({
    imports: [
        CommonModule,
        CchatRoutingModule
//        ModalModule.forRoot(),
    ],
    declarations: [CchatComponent]
})
export class CchatModule {
}
