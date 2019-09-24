import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PatientHomeModule } from './patient-home/patient-home.module';
import { PatientCheckUpModule } from './patient-check-up/patient-check-up.module';
import { PatientAppointmentsModule } from './patient-appointments/patient-appointments.module';
import { PatientFindDoctorsModule } from './patient-find-doctors/patient-find-doctors.module';
import { PatientHistoryModule } from './patient-history/patient-history.module';
import { PatientMessagesModule } from './patient-messages/patient-messages.module';
import { PatientProfileModule } from './patient-profile/patient-profile.module';
import { PatientAppointmentModule } from './patient-appointment/patient-appointment.module';
import { SharedModule } from './../shared/shared.module';

import { PatientBodyComponent } from './patient-body/patient-body.component';
import { AppointmentsComponent } from '../../components/appointments/appointments.component';
import { AppointmentComponent } from '../../components/appointment/appointment.component';
import { PatientCheckUpComponent } from './patient-check-up/patient-check-up/patient-check-up.component';
import { FindDoctorsComponent } from './patient-find-doctors/find-doctors/find-doctors.component';
import { ScheduleComponent } from '../../components/schedule/schedule.component';
import { HistoryComponent } from './patient-history/history/history.component';
import { HomebodyComponent } from './patient-home/homebody/homebody.component';
import { ChatComponent } from '../../components/chat/chat.component';
import { ProfileComponent } from './../../components/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: PatientBodyComponent,
    children: [
      {
        path:'',
        redirectTo:'home',
        pathMatch:'full',
      },
      {
        path: 'appointments',
        component: AppointmentsComponent,
      },
      {
        path: 'appointments/detail',
        component: AppointmentComponent
      },
      {
        path: 'check-up',
        component: PatientCheckUpComponent,
      },
      {
        path: 'find-doctors',
        component: FindDoctorsComponent,
      },
      {
        path: 'find-doctors/:userdoctor/schedule',
        component: ScheduleComponent,
      },
      {
        path: 'history',
        component: HistoryComponent,
      },
      {
        path: 'home',
        component: HomebodyComponent,
      },
      {
        path: 'messages',
        component: ChatComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      }
    ]
  }
];

@NgModule({
  declarations: [
  PatientBodyComponent],
  imports: [
    CommonModule,
    PatientHomeModule,
    PatientCheckUpModule,
    PatientAppointmentsModule,
    PatientFindDoctorsModule,
    PatientHistoryModule,
    PatientMessagesModule,
    PatientProfileModule,
    PatientAppointmentModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  // exports:[
  //   RouterModule
  // ]
})
export class PatientModule { }
