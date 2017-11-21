import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PChatComponent } from './chat.component';

const routes: Routes = [
    { path: '', component: PChatComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PchatRoutingModule { }
