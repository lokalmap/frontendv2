import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';


import { MapsRoutingModule } from './maps-routing.module';
import { MapsComponent } from './maps.component';
import { environment } from '../../environments/environment';

import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from '../shared';
@NgModule({
  imports: [
    CommonModule,
    MapsRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: environment.agm_gmap_apiKey,
          libraries: ["places"]
    }), //end here
    TranslateModule
  ],
  declarations: [MapsComponent,HeaderComponent]
})
export class MapsModule { }
