import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopContactComponent } from './components/top-contact/top-contact.component';
import { HeaderComponent } from './components/header/header.component';
import { HomebodyComponent } from './components/homebody/homebody.component';
import { FooterComponent } from './components/footer/footer.component';
import { CheckUpComponent } from './components/check-up/check-up.component';
import { ResultCheckUpComponent } from './components/result-check-up/result-check-up.component';
import { DoctorsRecommendingComponent } from './components/doctors-recommending/doctors-recommending.component';
import { AppointmentsComponent } from './components/appointments/appointments.component';

@NgModule({
  declarations: [
    AppComponent,
    TopContactComponent,
    HeaderComponent,
    HomebodyComponent,
    FooterComponent,
    CheckUpComponent,
    ResultCheckUpComponent,
    DoctorsRecommendingComponent,
    AppointmentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
