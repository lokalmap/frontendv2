import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnauthComponent } from './unauth/unauth.component';

const routes: Routes = [
  { path: 'unauthorized', component: UnauthComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
