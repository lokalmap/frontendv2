import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookinghistComponent } from './bookinghist.component';

const routes: Routes = [
    { path: '', component: BookinghistComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BkRoutingModule { }
