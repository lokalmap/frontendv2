import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitemComponent } from './citem.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
    imports: [
        CommonModule,
        NgbDropdownModule
    ],
    declarations: [CitemComponent],
    exports: [CitemComponent]
})
export class CitemModule { }
