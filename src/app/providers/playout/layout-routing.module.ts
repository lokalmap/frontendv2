import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'dashboard', loadChildren: '../dashboard/dashboard.module#DashboardModule' },
            { path: 'bookings', loadChildren: '../pbookings/pbookings.module#PbookingsModule' },
            { path: 'inventory', loadChildren: '../my-inventory/my-inventory.module#MyinventoryModule' },
            { path: 'summary', loadChildren: '../sum-inventory/sum-inventory.module#InvsumModule' },
            { path: 'statistics', loadChildren: '../statistics/stat.module#StatisticsModule' },
            { path: 'chat', loadChildren: '../chat/pchat.module#PchatModule' },
            { path: 'ads', loadChildren: '../ads/ads.module#AdsModule' },
            { path: 'search', loadChildren: '../search/search.module#SearchModule' }

        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
