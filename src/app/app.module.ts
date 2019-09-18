import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { Routes, RouterModule } from '@angular/router';
import { PatientModule } from './patient/patient.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopContactComponent } from './components/top-contact/top-contact.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginDialogComponent } from './components/login-dialog/login-dialog.component';
import { RegisterDialogComponent } from './components/register-dialog/register-dialog.component';
import { UnloginComponent } from './components/unlogin/unlogin.component';
import { AuthenticatedComponent } from './components/authenticated/authenticated.component';
import { UpdateScheduleComponent } from './components/update-schedule/update-schedule.component';
import { ContributeComponent } from './components/contribute/contribute.component';
import { SideBarAdminComponent } from './components/side-bar-admin/side-bar-admin.component';
import { BodyAdminComponent } from './components/body-admin/body-admin.component';
import { OverviewComponent } from './components/overview/overview.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { RequirementComponent } from './components/requirement/requirement.component';
import { LogoComponent } from './components/logo/logo.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'patient/home',
    pathMatch: 'full'
  },
  // {
  //   path: '**',
  //   redirectTo: 'patient',
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'doctor',
  //   redirectTo: 'doctor/home',
  //   pathMatch: 'full'
  // }
];

@NgModule({
  declarations: [
    AppComponent,
    TopContactComponent,
    HeaderComponent,
    FooterComponent,
    LoginDialogComponent,
    RegisterDialogComponent,
    UnloginComponent,
    AuthenticatedComponent,
    UpdateScheduleComponent,
    ContributeComponent,
    SideBarAdminComponent,
    BodyAdminComponent,
    OverviewComponent,
    LineChartComponent,
    UsersComponent,
    UserComponent,
    RequirementComponent,
    LogoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    PatientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
