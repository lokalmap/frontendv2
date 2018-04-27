import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemchatComponent } from './itemchat.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
    imports: [
        CommonModule,
        NgbDropdownModule
    ],
    declarations: [ItemchatComponent],
    exports: [ItemchatComponent]
})
export class ItemchatModule { }
