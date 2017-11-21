import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SearchRoutingModule } from './search-rtr.module';
import { SearchComponent } from './search.component';
//import { ModalModule } from 'ngx-bootstrap/modal'

@NgModule({
    imports: [
        CommonModule,
        SearchRoutingModule
//        ModalModule.forRoot(),
    ],
    declarations: [SearchComponent]
})
export class SearchModule {
}
