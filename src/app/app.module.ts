import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent} from './Home/home.component';
import { SaleComponent} from './Sales/sale.component';
import { AppRoutingModule } from './app-routing.module';
import { NvarComponent } from './nvar/nvar.component';
import { ClientComponent } from './Client/client.component';
import {HttpClientModule} from '@angular/common/http'
import { ElementComponent } from './Elementos/Element.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SaleComponent,
    NvarComponent,
    ClientComponent,
    ElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
