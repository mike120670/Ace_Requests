
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './orders/orders.component';
import { RequestsComponent } from './requests/requests.component';
import { AdministrationComponent } from './administration/administration.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
// https://www.youtube.com/watch?time_continue=64&v=x8UR5DZcts8
const routes: Routes = [
{ path: 'home', component: HomeComponent },
{ path: 'orders', component: OrdersComponent },
{ path: 'requests', component: RequestsComponent },
{ path: 'administration', component: AdministrationComponent },
{ path: '**', component: PageNotFoundComponent },
{ path: '', redirectTo: '/home', pathMatch: 'full' },
{ path: 'nav', component: NavComponent },
{ path: 'footer', component: FooterComponent },
{ path: 'header', component: HeaderComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
