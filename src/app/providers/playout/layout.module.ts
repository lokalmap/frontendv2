import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';//../../shared';
import { SidebarComponent} from './sidebar/sidebar.component';
@NgModule({
    imports: [
        CommonModule,
        NgbDropdownModule.forRoot(),
        LayoutRoutingModule,
        FormsModule,
        TranslateModule
    ],
    declarations: [
        LayoutComponent,
        HeaderComponent,
        SidebarComponent
    ]
})
export class LayoutModule { }
