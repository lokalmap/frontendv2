import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-err-rtr.module';
import { UnauthComponent } from './unauth/unauth.component';

@NgModule({
    imports: [
      AppRoutingModule
    ],
    declarations: [
        UnauthComponent
    ]
})
export class AppErrModule { }
