import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { SharedModule } from './pages/shared/shared.module';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UserServicesService } from './services/user-services/user-services.service';
import { LocalServicesService } from './services/local-services/local-services.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    SharedModule,
  ],
  providers: [
    UserServicesService,
    LocalServicesService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
