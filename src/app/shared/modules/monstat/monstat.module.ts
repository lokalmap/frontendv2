import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonstatComponent } from './monstat.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
    imports: [
        CommonModule,
        NgbDropdownModule
    ],
    declarations: [MonstatComponent],
    exports: [MonstatComponent]
})
export class MonstatModule { }
