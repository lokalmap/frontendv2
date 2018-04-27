import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatobjComponent } from './chatobj.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ItemchatModule } from './itemchat.module';
@NgModule({
    imports: [
        CommonModule,
        NgbDropdownModule,
        ItemchatModule
    ],
    declarations: [ChatobjComponent],
    exports: [ChatobjComponent]
})
export class ChatobjModule { }
