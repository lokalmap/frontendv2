import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChartsModule as Ng2Charts } from 'ng2-charts';

import { StatRoutingModule } from './stat-rtr.module';
import { StatisticsComponent } from './statistics.component';
//import { ModalModule } from 'ngx-bootstrap/modal'

@NgModule({
    imports: [
        CommonModule,
        Ng2Charts,
        StatRoutingModule
//        ModalModule.forRoot(),
    ],
    declarations: [StatisticsComponent]
})
export class StatisticsModule {
}
