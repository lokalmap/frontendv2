import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HistoryComponent } from './history.component';

const routes: Routes = [
  { path: '', component: HistoryComponent,
  children: [
      { path: 'bk', loadChildren: '../../shared/components/bookinghist/bk.module#BkModule' },
      { path: 'st', loadChildren: '../../shared/components/storehist/st.module#StModule' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoryRoutingModule { }
