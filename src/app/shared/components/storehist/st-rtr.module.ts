import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StorehistComponent } from './storehist.component';

const routes: Routes = [
    { path: '', component: StorehistComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StRoutingModule { }
