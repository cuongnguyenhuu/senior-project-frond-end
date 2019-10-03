import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './pages/shared/shared.module';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UserServicesService } from './services/user-services/user-services.service';
import { LocalServicesService } from './services/local-services/local-services.service';
import { ImageServicesService } from './services/image-servives/image-services.service';
import { ScheduleService } from './services/schedule-services/schedule.service';
import { ConvertTimeService } from './services/convertTimeServices/convert-time.service';
import { AppointmentService } from './services/appointment-services/appointment.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [
    UserServicesService,
    LocalServicesService,
    ImageServicesService,
    ScheduleService,
    ConvertTimeService,
    AppointmentService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
