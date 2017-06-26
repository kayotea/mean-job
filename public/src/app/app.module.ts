import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NewentryComponent } from './newentry/newentry.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CompanyinfoComponent } from './companyinfo/companyinfo.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NewentryComponent,
    DashboardComponent,
    CompanyinfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
