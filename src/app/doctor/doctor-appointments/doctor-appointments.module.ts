import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AppointmentsComponent } from '../../components/appointments/appointments.component';
import { AppointmentComponent } from '../../components/appointment/appointment.component';

const routes: Routes = [
  {
    path: 'doctor/appointments',
    component: AppointmentsComponent,
  },
  {
    path: 'doctor/appointments/detail',
    component: AppointmentComponent
  },
];
@NgModule({
  declarations: [
    // AppointmentsComponent,
    // AppointmentComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DoctorAppointmentsModule { }
