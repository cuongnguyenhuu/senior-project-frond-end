import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AppointmentsComponent } from './appointments/appointments.component';
import { AppointmentComponent } from './appointment/appointment.component';

const routes: Routes = [
  {
    path: 'patient/appointments',
    component: AppointmentsComponent,
  },
  {
    path: 'patient/appointments/detail',
    component: AppointmentComponent
  },
];

@NgModule({
  declarations: [
    AppointmentsComponent,
    AppointmentComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PatientAppointmentsModule { }
