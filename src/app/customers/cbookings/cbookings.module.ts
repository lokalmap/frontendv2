import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    NgbCarouselModule,
    NgbAlertModule
} from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from '../../shared';
import { CbookingsRoutingModule } from './cbookings-rtr.module';
import { CbookingsComponent } from './cbookings.component';;
import { StatModule } from '../../shared';
import { AgmCoreModule } from '@agm/core';
import { environment } from '../../../environments/environment';
import { BObjModule } from '../../shared';
@NgModule({
    imports: [
        CommonModule,
        CbookingsRoutingModule,
        StatModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        ModalModule.forRoot(),
        ChartsModule,
        BObjModule
    ],
    declarations: [
        CbookingsComponent
    ]
})
export class CbookingsModule { }
