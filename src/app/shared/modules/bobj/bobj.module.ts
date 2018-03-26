import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BObjComponent } from './bobj.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
    imports: [
        CommonModule,
        NgbDropdownModule
    ],
    declarations: [BObjComponent],
    exports: [BObjComponent]
})
export class BObjModule { }
