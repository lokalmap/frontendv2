import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { SettingRoutingModule } from './setting-rtr.module';
import { SettingComponent } from './setting.component';
import { HeaderComponent } from '../header/header.component';//../../shared';
import { SidebarComponent} from '../sidebar/sidebar.component';

@NgModule({
    imports: [
        CommonModule,
        NgbDropdownModule.forRoot(),
        SettingRoutingModule,
        FormsModule,
        TranslateModule
    ],
    declarations: [
        SettingComponent,
        HeaderComponent,
        SidebarComponent
    ]
})
export class SettingModule { }