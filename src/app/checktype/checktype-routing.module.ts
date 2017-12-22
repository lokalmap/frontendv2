import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckTypeComponent } from './checktype.component';

const routes: Routes = [
    { path: '', component: CheckTypeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class CheckTypeRoutingModule {}
