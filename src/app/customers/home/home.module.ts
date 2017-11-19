import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    NgbCarouselModule,
    NgbAlertModule
} from '@ng-bootstrap/ng-bootstrap';


import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from '../../shared';

import { HomeRoutingModule } from './home-rtr.module';
import { HomeComponent } from './home.component';
import {
    TimelineComponent,
    NotificationComponent,
    ChatComponent
} from './components';
import { StatModule } from '../../shared';
import { AgmCoreModule } from '@agm/core';
import { environment } from '../../../environments/environment';
@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        StatModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot()

    ],
    declarations: [
        HomeComponent,
        TimelineComponent,
        NotificationComponent,
        ChatComponent
    ]
})
export class HomeModule { }
