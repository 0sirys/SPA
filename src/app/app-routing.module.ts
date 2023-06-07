import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Home/home.component';
import {SaleComponent} from './Sales/sale.component';
import { ClientComponent } from './Client/client.component';

const routes: Routes= [

  {path:'', redirectTo:'/Home', pathMatch: 'full'},
  {path:'Home', component:HomeComponent},
  {path:'Sale', component:SaleComponent},
  {path: 'Client', component:ClientComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
  
})

export class AppRoutingModule { }
