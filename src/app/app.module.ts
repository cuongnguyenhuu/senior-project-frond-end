import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './pages/shared/shared.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UserServicesService } from './services/user-services/user-services.service';
import { LocalServicesService } from './services/local-services/local-services.service';
import { ImageServicesService } from './services/image-servives/image-services.service';
import { ScheduleService } from './services/schedule-services/schedule.service';
import { ConvertTimeService } from './services/convertTimeServices/convert-time.service';
import { AppointmentService } from './services/appointment-services/appointment.service';
import { DatePipe } from '@angular/common'
import { FirebaseService } from './services/firebase-services/firebase.service';

import { environment } from './../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [
    UserServicesService,
    LocalServicesService,
    ImageServicesService,
    ScheduleService,
    ConvertTimeService,
    AppointmentService,
    DatePipe,
    FirebaseService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
