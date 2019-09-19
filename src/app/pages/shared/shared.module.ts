import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LogoComponent } from './../../components/logo/logo.component';
import { AuthenticatedComponent } from './../../components/authenticated/authenticated.component';
import { TopContactComponent } from './../../components/top-contact/top-contact.component';
import { ChatComponent } from './../../components/chat/chat.component';
import { FooterComponent } from './../../components/footer/footer.component';
import { AppointmentsComponent } from './../../components/appointments/appointments.component';
import { AppointmentComponent } from './../../components/appointment/appointment.component';
import { HeaderComponent } from './../../components/header/header.component';
import { ProfileComponent } from './../../components/profile/profile.component';
import { UnloginComponent } from './../../components/unlogin/unlogin.component';
import { LoginDialogComponent } from './../../components/login-dialog/login-dialog.component';
import { RegisterDialogComponent } from './../../components/register-dialog/register-dialog.component';

@NgModule({
  declarations: [
    LogoComponent,
    AuthenticatedComponent,
    TopContactComponent,
    ChatComponent,
    FooterComponent,
    AppointmentsComponent,
    AppointmentComponent,
    HeaderComponent,
    ProfileComponent,
    UnloginComponent,
    LoginDialogComponent,
    RegisterDialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    LogoComponent,
    AuthenticatedComponent,
    TopContactComponent,
    ChatComponent,
    FooterComponent,
    AppointmentsComponent,
    AppointmentComponent,
    HeaderComponent,
    ProfileComponent,
    UnloginComponent,
    LoginDialogComponent,
    RegisterDialogComponent
  ]
})
export class SharedModule { }
