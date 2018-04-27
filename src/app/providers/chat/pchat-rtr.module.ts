import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PchatComponent } from './pchat.component';

const routes: Routes = [
    { path: '', component: PchatComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PchatRoutingModule { }
