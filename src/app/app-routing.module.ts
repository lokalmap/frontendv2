import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard, AuthGuard_CheckAccTypes } from './shared';
import { InfoComponent } from './shared/components/info/info.component';
import { InfoeditComponent } from './shared/components/info-edit/info-edit.component';

const routes: Routes = [
    { path: '', loadChildren: './maps/maps.module#MapsModule' },
//    { path: 'customers', loadChildren: './customers/clayout/layout.module#LayoutModule'},// canActivate: [AuthGuard_CheckAccTypes] },
//    { path: 'providers', loadChildren: './providers/playout/layout.module#LayoutModule'}, //canActivate: [AuthGuard_CheckAccTypes] },
    { path: 'info', component: InfoComponent},// canActivate: [AuthGuard]},
    { path: 'info/:id', component: InfoeditComponent},//, canActivate: [AuthGuard]},
//    { path: 'login', loadChildren: './login/login.module#LoginModule' },
//    { path: 'settings', loadChildren: './shared/components/settings/setting.module#SettingModule'},// canActivate: [AuthGuard] },
//    { path: 'signup', loadChildren: './signup/signup.module#SignupModule' },
    { path: 'error', loadChildren: './shared/components/err-routes/app-err.module#AppErrModule' },
    { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
    { path: '**', redirectTo: 'not-found' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
