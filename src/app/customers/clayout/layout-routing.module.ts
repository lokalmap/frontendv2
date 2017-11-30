import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { InfoComponent } from '../info/info.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'home', loadChildren: '../home/home.module#HomeModule' },
            { path: 'bookings', loadChildren: '../cbookings/cbookings.module#CbookingsModule' },
            { path: 'history', loadChildren: '../history/history.module#HistoryModule' },
            { path: 'chat', loadChildren: '../cchat/cchat.module#CchatModule' },
            { path: 'track', loadChildren: '../../shared/components/track/track.module#TrackModule' },
            { path: 'info', component: InfoComponent},
            { path: 'dashboard', loadChildren: '../../layout/dashboard/dashboard.module#DashboardModule' },
            { path: 'charts', loadChildren: '../../layout/charts/charts.module#ChartsModule' },
            { path: 'tables', loadChildren: '../../layout/tables/tables.module#TablesModule' },
            { path: 'bs-element', loadChildren: '../../layout/bs-element/bs-element.module#BsElementModule' },
            { path: 'grid', loadChildren: '../../layout/grid/grid.module#GridModule' },
            { path: 'form', loadChildren: '../../layout/form/form.module#FormModule' },
            { path: 'components', loadChildren: '../../layout/bs-component/bs-component.module#BsComponentModule' },
            { path: 'blank-page', loadChildren: '../../layout/blank-page/blank-page.module#BlankPageModule' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
