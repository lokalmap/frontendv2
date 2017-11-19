import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/*
import { AuthGuard } from '../_guards';
// Layouts
import { LokalHeaderComponent } from '../layouts/lokalheader.component';

//files to be imported
import { FrontendComponent } from '../frontend/frontend.component';
import { MapUiComponent } from '../maps-ui/map-ui.component';

import { UserprofComponent } from '../usercomp/userprof/userprof.component';
import { RegisterComponent } from '../usercomp/register/register.component';
import { LoginComponent } from '../usercomp/login/login.component';
import { RcustomerComponent } from '../usercomp/register/rcustomer/rcustomer.component';
import { RproviderComponent } from '../usercomp/register/rprovider/rprovider.component';
*/
import { ProvidersComponent } from '../providers/providers.component';
import { CustomersComponent } from '../customers/customers.component';
import { DashboardComponent } from '../providers/dashboard/dashboard.component';
import { PbookingsComponent } from '../providers/pbookings/pbookings.component';
import { SumInventoryComponent } from '../providers/sum-inventory/sum-inventory.component';
import { MyInventoryComponent } from '../providers/my-inventory/my-inventory.component';
import { StatisticsComponent } from '../providers/statistics/statistics.component';
import { PChatComponent } from '../providers/chat/chat.component';
import { CChatComponent } from '../customers/chat/chat.component';
import { AdsComponent } from '../providers/ads/ads.component';
import { SearchComponent } from '../providers/search/search.component';
import { HomeComponent } from '../customers/home/home.component';
import { HistoryComponent } from '../customers/history/history.component';
import { BookReserveComponent } from '../customers/book-reserve/book-reserve.component';
import { InfoComponent } from '../customers/info/info.component';
/*
import { BookinghistComponent } from '../shared/bookinghist/bookinghist.component';
import { StorehistComponent } from '../shared/storehist/storehist.component';
*/
export const routes: Routes = [
/*
  {path: '', component:FrontendComponent, pathMatch: 'full'},
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent },
  {path: 'customers', component: CustomersComponent, children: [
    {path: 'home', component: HomeComponent },
    {path: 'history', component: HistoryComponent,children: [
      {path:'bookinghist',component: BookinghistComponent},
      {path:'storehist',component: StorehistComponent}
    ]},
    {path: 'bookings', component: BookReserveComponent },
    {path: 'info', component: InfoComponent },
    {path: 'chat', component: CChatComponent }
  ]},
*/
  {path: 'providers', component: ProvidersComponent, children: [
    {path: 'pbookings', component: PbookingsComponent },
    {path: 'dashboard', component: DashboardComponent },
    {path: 'inventory', component: MyInventoryComponent },
    {path: 'summary', component: SumInventoryComponent },
    {path: 'statistics', component: StatisticsComponent },
    {path: 'chat', component: PChatComponent },
    {path: 'ads', component: AdsComponent },
    {path: 'search', component: SearchComponent }
  ]},
/*
{ path: 'register', component: RegisterComponent, children: [
{ path: 'rcustomer', component: RcustomerComponent },
{ path: 'rprovider', component: RproviderComponent }
] },
*/
];
const routesv2: Routes = [
    {
        path: '',
        loadChildren: '../frontend/frontend.module#FrontendModule'
//        loadChildren: '../layouts/layout.module#LayoutModule'
//        canActivate: [AuthGuard]
    }
    //,{ path: 'login', loadChildren: '../usercomp/login.module#LoginModule' }
    //{ path: 'signup', loadChildren: './signup/signup.module#SignupModule' },
    //{ path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
    //{ path: '**', redirectTo: 'not-found' }
];



@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
