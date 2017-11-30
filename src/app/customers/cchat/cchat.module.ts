import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CchatRoutingModule } from './cchat-rtr.module';
import { CchatComponent } from './cchat.component';
//import { ModalModule } from 'ngx-bootstrap/modal'
import { ChatComponent } from './components';
@NgModule({
    imports: [
        CommonModule,
        CchatRoutingModule
//        ModalModule.forRoot(),
    ],
    declarations: [CchatComponent,ChatComponent]
})
export class CchatModule {
}
