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
import { AppointmentComponent } from './components/appointment/appointment.component';
import { FindDoctorsComponent } from './components/find-doctors/find-doctors.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { NotifDialogComponent } from './components/notif-dialog/notif-dialog.component';
import { LoginDialogComponent } from './components/login-dialog/login-dialog.component';
import { RegisterDialogComponent } from './components/register-dialog/register-dialog.component';
import { UnloginComponent } from './components/unlogin/unlogin.component';
import { AuthenticatedComponent } from './components/authenticated/authenticated.component';
import { UpdateScheduleComponent } from './components/update-schedule/update-schedule.component';
import { ContributeComponent } from './components/contribute/contribute.component';
import { HistoryComponent } from './components/history/history.component';
import { SideBarAdminComponent } from './components/side-bar-admin/side-bar-admin.component';
import { BodyAdminComponent } from './components/body-admin/body-admin.component';
import { OverviewComponent } from './components/overview/overview.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { RequirementComponent } from './components/requirement/requirement.component';
import { ChatComponent } from './components/chat/chat.component';
import { LogoComponent } from './components/logo/logo.component';

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
    AppointmentsComponent,
    AppointmentComponent,
    FindDoctorsComponent,
    ScheduleComponent,
    ConfirmDialogComponent,
    NotifDialogComponent,
    LoginDialogComponent,
    RegisterDialogComponent,
    UnloginComponent,
    AuthenticatedComponent,
    UpdateScheduleComponent,
    ContributeComponent,
    HistoryComponent,
    SideBarAdminComponent,
    BodyAdminComponent,
    OverviewComponent,
    LineChartComponent,
    UsersComponent,
    UserComponent,
    RequirementComponent,
    ChatComponent,
    LogoComponent
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
