import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TrackRoutingModule } from './track-rtr.module';
import { TrackComponent } from './track.component';
//import { ModalModule } from 'ngx-bootstrap/modal'

@NgModule({
    imports: [
        CommonModule,
        TrackRoutingModule
//        ModalModule.forRoot(),
    ],
    declarations: [TrackComponent]
})
export class TrackModule {
}
