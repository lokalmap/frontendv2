import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard, AuthGuard_CheckAccTypes } from './shared';
import { AlertService, AuthenticationService, UserService, MapService, CommonService} from './services/index';
import { customHttpProvider } from './_helpers/index';
import { AlertComponent } from './_directives/index';
import { InfoComponent } from './shared/components/info/info.component';
import { InfoeditComponent } from './shared/components/info-edit/info-edit.component';

//test data


// AoT requires an exported function for factories
export function HttpLoaderFactory(http: Http) {
    // for development
    // return new TranslateHttpLoader(http, '/start-angular/SB-Admin-BS4-Angular-4/master/dist/assets/i18n/', '.json');
    return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
}
@NgModule({
    declarations: [
        AppComponent,
        AlertComponent,
        InfoComponent,
        InfoeditComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot(),
        FormsModule,
        HttpModule,
        //start here
        AppRoutingModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [Http]
            }
        }),
    ],
    providers: [
      AuthGuard,
      AuthGuard_CheckAccTypes,
      UserService,
      AlertService,
      MapService,
      CommonService,
      AuthenticationService,
      customHttpProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
