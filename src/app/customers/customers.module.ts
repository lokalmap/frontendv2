import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    NgbCarouselModule,
    NgbAlertModule
} from '@ng-bootstrap/ng-bootstrap';


import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import {
    TimelineComponent,
    NotificationComponent,
    ChatComponent
} from './components';
import { StatModule } from '../shared';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        CustomersRoutingModule,
        StatModule,
    ],
    declarations: [
        CustomersComponent,
        TimelineComponent,
        NotificationComponent,
        ChatComponent
    ]
})
export class CustomersModule { }
