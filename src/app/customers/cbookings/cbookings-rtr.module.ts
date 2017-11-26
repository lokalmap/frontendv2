import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CbookingsComponent } from './cbookings.component';

const routes: Routes = [
    { path: '', component: CbookingsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CbookingsRoutingModule { }
