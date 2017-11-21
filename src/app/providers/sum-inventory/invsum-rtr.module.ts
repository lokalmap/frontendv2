import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SumInventoryComponent } from './sum-inventory.component';

const routes: Routes = [
    { path: '', component: SumInventoryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvSumRoutingModule { }
