import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CchatComponent } from './chat.component';

const routes: Routes = [
    { path: '', component: CchatComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CchatRoutingModule { }
