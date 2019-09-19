import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DoctorAppointmentsModule } from './doctor-appointments/doctor-appointments.module';
import { DoctorScheduleModule } from'./doctor-schedule/doctor-schedule.module';
import { DoctorContributeModule } from './doctor-contribute/doctor-contribute.module';
import { SharedModule } from './../shared/shared.module';

import { DoctorBodyComponent } from './doctor-body/doctor-body.component';
import { AppointmentsComponent } from './../../components/appointments/appointments.component';
import { AppointmentComponent } from './../../components/appointment/appointment.component';
import { ContributeComponent } from './doctor-contribute/contribute/contribute.component';
import { ScheduleComponent } from '../../components/schedule/schedule.component';
import { ChatComponent } from './../../components/chat/chat.component';
import { ProfileComponent } from './../../components/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component:DoctorBodyComponent,
    children:[
      {
        path: '',
        redirectTo:'appointments',
        pathMatch:'full'
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
        path: 'contribute',
        component: ContributeComponent,
      },
      {
        path: 'schedule',
        component: ScheduleComponent,
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
    DoctorBodyComponent,
  ],
  imports: [
    CommonModule,
    DoctorContributeModule,
    DoctorAppointmentsModule,
    DoctorScheduleModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    
  ]
})
export class DoctorModule { }
